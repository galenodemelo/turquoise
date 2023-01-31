import { NextApiRequest, NextApiResponse } from "next";
import ApiResponse from "src/libs/ApiResponse";
import ContactFormModel from "src/libs/database/ContactFormModel";
import BuilderCmsManager, { CmsResponse, SaveProspectParams } from "src/libs/integration/BuilderCmsManager";
import SendGridManager from "src/libs/mail/SendGridManager";

export interface ContactPayload {
    name: string
    lastName: string
    email: string
    phone: string
    origin: string
    specify?: string
    message: string
}

export default async function ApiContact(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        if (req.method?.toUpperCase() !== "POST") {
            res.status(405).json(ApiResponse.error("Method not allowed"))
            return
        }

        const payload: ContactPayload = req.body

        let promiseList: Promise<any>[] = []

        const storeInDatabasePromise: Promise<void> = ContactFormModel.save(payload)
        promiseList.push(storeInDatabasePromise)

        let mailWasSent = false
        const mailSendPromise: Promise<boolean> = SendGridManager.send(
            `Site contact form - ${payload.name} ${payload.lastName}`,
            buildMailHtml(payload),
            payload.email,
            payload.email
        ).then((success: boolean) => mailWasSent = success)
        promiseList.push(mailSendPromise)

        const sentToCmsPromise = sendToCms(payload).then((response: CmsResponse) => {
            if (!response.success) console.error("ApiContact.sendToCms >>", response.rawResponse)
        })
        promiseList.push(sentToCmsPromise)

        await Promise.all(promiseList)
        if (!mailWasSent) {
            res.status(500).json(ApiResponse.error("Mail was not sent. Please, try again."))
            return
        }

        res.status(200).json(ApiResponse.success("Contact sent successfully!"))
    } catch (error) {
        console.error("ApiContact >> Unknown error", `Data: [${JSON.stringify(req.body)}]`, error);
        res.status(500).json(ApiResponse.error("Unknown error. Please, contact support"))
    }
}

function buildMailHtml({ name, lastName, email, phone, origin, specify, message }: ContactPayload): string {
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

async function sendToCms({ name, lastName, email, phone, origin, specify, message }: ContactPayload): Promise<CmsResponse> {
    try {
        const isDevelopment = process.env.NODE_ENV === 'development'
        if (isDevelopment) return { success: true, rawResponse: "Sample response" }

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
    } catch (error) {
        console.error("ApiContact.sendToCms >> Unknown error", `Data: [${JSON.stringify(error)}]`, error);
        return { success: false, rawResponse: "No response" }
    }
}
