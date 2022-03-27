import { NextApiRequest, NextApiResponse } from "next"
import DataValidator from "src/libs/DataValidator"
import SendGridManager from "src/libs/SendGridManager"

export default async function SendContactForm(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== "POST") {
            res.status(405).json({success: false, errorList: ["Method not allowed"]})
            return
        }

        const formValidation = validateForm(req.body)
        if (!formValidation.success) {
            res.status(400).json(formValidation)
            return
        }

        const mailWasSent: boolean = await SendGridManager.send(
            `Site contact form - ${req.body.name} ${req.body.lastName}`,
            buildMailHtml(req.body),
            req.body.email,
            req.body.email
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

function validateForm(requestBody: any): { success: boolean, errorList?: string[] } {
    let errorList: string[] = []

    if (!requestBody.name) errorList.push("Name is required")
    if (!requestBody.lastName) errorList.push("Last name is required")
    if (!requestBody.email) errorList.push("E-mail is required")
    if (!DataValidator.email(requestBody.email)) errorList.push("E-mail invalid format")
    if (!requestBody.phone) errorList.push("Phone is required")
    if (!requestBody.message) errorList.push("Please, inform how we can help you")

    return {
        success: errorList.length === 0,
        errorList: errorList
    }
}

function buildMailHtml({name, lastName, email, phone, origin, message}: { name: string, lastName: string, email: string, phone: string, origin?: string, message: string }) {
    return `
        <h1>Contact form</h1>
        <p>
            <strong>Name:</strong> ${name}<br />
            <strong>Last name:</strong> ${lastName}<br />
            <strong>E-mail:</strong> ${email}<br />
            <strong>Phone:</strong> ${phone}<br />
            <strong>Origin:</strong> ${origin}<br />
            <strong>Message:</strong> ${message}<br />
        </p>
    `
}
