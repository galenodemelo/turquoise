import { NextApiRequest, NextApiResponse } from "next"

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
}
