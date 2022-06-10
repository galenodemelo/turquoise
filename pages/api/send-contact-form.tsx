import { createClient } from "@supabase/supabase-js"
import { NextApiRequest, NextApiResponse } from "next"
import BuilderCmsManager, { CmsResponse, SaveProspectParams } from "src/integration/buildercms/BuilderCmsManager"
import DataValidator from "src/libs/DataValidator"
import SendGridManager from "src/libs/SendGridManager"
import SETTINGS from "src/settings"

type SendContactRequestData = {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    origin?: string,
    specify?: string,
    message: string,
    recaptchaToken: string
}

export default async function SendContactForm(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== "POST") {
            res.status(405).json({success: false, errorList: ["Method not allowed"]})
            return
        }

        const requestData: SendContactRequestData = clearRequestData(req.body)

        const isRecaptchaValid: boolean = await validateRecaptcha(requestData.recaptchaToken)
        if (!isRecaptchaValid) {
            res.status(400).json({success: false, errorList: ["Recaptcha invalid"]})
            return
        }

        const formValidation = validateForm(requestData)
        if (!formValidation.success) {
            res.status(400).json(formValidation)
            return
        }

        const cmsResponse: CmsResponse = await sendToCms(requestData)
        const contactWasStoredOnDatabase: boolean = await storeInDatabase(requestData, cmsResponse)
        if (!contactWasStoredOnDatabase) {
            res.status(500).json({success: false, errorList: ["An unexpected error occurred. Please, try again later"]})
            return
        }

        const mailWasSent: boolean = await SendGridManager.send(
            `Site contact form - ${requestData.name} ${requestData.lastName}`,
            buildMailHtml(requestData),
            requestData.email,
            requestData.email
        )
        if (!mailWasSent) {
            res.status(500).json({success: false, errorList: ["Mail was not sent. Please, try again."]})
            return
        }

        res.status(200).json({success: true, message: "Contact sent successfully. We sent a copy to your e-mail."})
    } catch (error) {
        console.error(`SendContactForm >> RequestBody: ${JSON.stringify(req.body)}`, error)
        res.status(500).json({success: false, errorList: ["Internal server error"]})
    }
}

function clearRequestData(requestBody: any): SendContactRequestData {
    return {
        name: requestBody.name,
        lastName: requestBody.lastName,
        email: requestBody.email,
        phone: requestBody.phone.replace(/\D/g, ""),
        origin: requestBody.origin,
        specify: requestBody.specify,
        message: requestBody.message,
        recaptchaToken: requestBody.recaptchaToken
    }
}

async function validateRecaptcha(recaptchaToken: string): Promise<boolean> {
    const response = await fetch(SETTINGS.GOOGLE_RECAPTCHA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            secret: process.env.GOOGLE_RECAPTCHA_SECRET ?? "",
            response: recaptchaToken
        })
    })
    const responseJson = await response.json()
    if (!responseJson.success) console.error(`validateRecaptcha >> responseJson: ${JSON.stringify(responseJson)}`)

    return responseJson.success
}


function validateForm(requestData: SendContactRequestData): { success: boolean, errorList?: string[] } {
    let errorList: string[] = []

    if (!requestData.name) errorList.push("Name is required")
    if (!requestData.lastName) errorList.push("Last name is required")
    if (requestData.name == requestData.lastName) errorList.push("Name and last name must be different")
    if (!requestData.email) errorList.push("E-mail is required")
    if (!DataValidator.email(requestData.email)) errorList.push("E-mail invalid format")
    if (!requestData.phone) errorList.push("Phone is required")
    if (!requestData.message) errorList.push("Please, inform how we can help you")

    return {
        success: errorList.length === 0,
        errorList: errorList
    }
}

function buildMailHtml({name, lastName, email, phone, origin, specify, message}: SendContactRequestData): string {
    let mailHtml: string = `<h1>Contact form</h1>`

    let fieldList: Array<string> = []
    fieldList.push(`<strong>Name:</strong> ${name}`)
    fieldList.push(`<strong>Last name:</strong> ${lastName}`)
    fieldList.push(`<strong>E-mail:</strong> ${email}`)
    fieldList.push(`<strong>Phone:</strong> ${phone}`)

    if (origin) fieldList.push(`<strong>How did you meet us:</strong> ${origin}`)
    if (specify) fieldList.push(`<strong>Please, specify:</strong> ${specify}`)

    fieldList.push(`<strong>Message:</strong> <br />${message.split("\n").join("<br />")}`)

    mailHtml += `<p>${fieldList.join("<br />")}</p>`

    return mailHtml
}

async function storeInDatabase({ name, lastName, email, phone, origin, specify, message }: SendContactRequestData, cmsResponse?: CmsResponse): Promise<boolean> {
    const supabase = createClient(SETTINGS.SUPABASE_URL, process.env.SUPABASE_API_KEY ?? "")
    const { data, error } = await supabase
        .from("contact_form")
        .insert([
            { client: "turquoise.homes", payload: { name, lastName, email, phone, origin, specify, message, cmsResponse: JSON.stringify(cmsResponse) } }
        ])


    if (error) {
        console.error(`storeInDatabase >> RequestBody: ${JSON.stringify({ name, lastName, email, phone, origin, specify, message })}`, error)
        return false
    }

    return true
}

async function sendToCms({ name, lastName, email, phone, origin, specify, message }: SendContactRequestData): Promise<CmsResponse> {
    const parsedData: SaveProspectParams = {
        FirstName: name,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Comments: `
            How did you met us?
            \n${[origin, specify].filter(Boolean).join(" - ")}
            \n\nMessage sent
            \n${message}`
    }

    return new BuilderCmsManager().saveProspect(parsedData)
}
