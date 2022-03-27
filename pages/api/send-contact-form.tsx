import { NextApiRequest, NextApiResponse } from "next"

export default function SendContactForm(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).end("Method not allowed")
        return
    }

    res.status(200).json("OK")
}
