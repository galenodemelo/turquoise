import { NextApiRequest, NextApiResponse } from "next";
import ContactFormModel from "src/libs/database/ContactFormModel";

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
            res.status(405).json({ success: false, message: "Method not allowed" })
            return
        }

        const payload: ContactPayload = req.body
        await ContactFormModel.save(payload)
        res.status(200).json({ success: true, message: "Contact sent successfully!" })
    } catch (error) {
        console.error("ApiContact >> Unknown error", `Data: [${JSON.stringify(req.body)}]`, error);
        res.status(500).json({ success: false, message: "Unknown error. Please, contact support" })
    }
}
