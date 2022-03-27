import MailService, { MailDataRequired } from "@sendgrid/mail"

class SendGridManager {

    private static DEFAULT_RECEIVER?: string = process.env.CONTACT_FORM_RECEIVER
    private static DEFAULT_FROM_EMAIL: string = "jeyoti8411@wpsavy.com"
    private static DEFAULT_FROM_NAME: string = "Turquoise Site"

    public static async send(subject: string, body: string, replyTo?: string, cc?: string): Promise<boolean> {
        MailService.setApiKey(process.env.SENDGRID_API_KEY ?? "")

        const message: MailDataRequired = this.buildMessage(subject, body, replyTo, cc)

        return await MailService.sendMultiple(message).then(() => {
            return true
        }).catch((error) => {
            console.log(error)
            return false
        })
    }

    private static buildMessage(subject: string, body: string, replyTo?: string, cc?: string): MailDataRequired {
        return {
            to: this.DEFAULT_RECEIVER,
            cc: cc,
            replyTo: replyTo,
            from: {
                email: this.DEFAULT_FROM_EMAIL,
                name: this.DEFAULT_FROM_NAME
            },
            subject: subject,
            html: body
        }
    }
}

export default SendGridManager
