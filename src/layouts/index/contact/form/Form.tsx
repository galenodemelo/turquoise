import Image from "next/image"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import styles from "./Form.module.sass"

type Props = {
    setIsFormValid: (isFormValid: boolean) => void
}

export default function Form({ setIsFormValid }: Props): JSX.Element {
    const [origin, setOrigin] = useState<string>("")
    const originList: Array<string> = ["A friend", "Realtor", "Instagram", "Facebook", "Other"]
    const needToSpecifyList: Array<string> = ["Other"]

    const [isSendingForm, setIsSendingForm] = useState<boolean>(false)
    const formReference = useRef<HTMLFormElement>(null)

    const recaptchaReference = useRef<ReCAPTCHA>(null)

    useEffect(() => {
        if (!formReference?.current) return
        formReference.current.onsubmit = async (event: SubmitEvent) => {
            if (!formReference?.current) return

            try {
                event.preventDefault()
                setIsSendingForm(true)
                const recaptchaToken = await recaptchaReference.current?.executeAsync()
                if (!recaptchaToken) {
                    alert("Failed to verify captcha")
                    return
                }

                const formData: FormData = new FormData(formReference.current)
                formData.append("recaptchaToken", recaptchaToken)
                const formDataAsJson: string = JSON.stringify(Object.fromEntries(formData))
                const formAction: string = formReference.current.getAttribute("action") ?? ""
                const formMethod: string = formReference.current.getAttribute("method") ?? ""
                const response: Response = await fetch(formAction, {
                    method: formMethod,
                    headers: new Headers({"Content-Type": "application/json"}),
                    body: formDataAsJson
                })
                const responseJson: any = await response.json()

                setIsSendingForm(false)
                recaptchaReference.current?.reset()
                if (!responseJson.success) {
                    alert(responseJson.errorList.join("\n"))
                    return
                }

                alert(responseJson.message)
                setIsFormValid(true)
            } catch (error) {
                console.error(error)
                setIsSendingForm(false)
            }
        }
    }, [formReference, isSendingForm, recaptchaReference])

    return (
        <form action="/api/send-contact-form" className={styles.form} method="POST" ref={formReference}>
            <div className={styles.row}>
                <div className={styles.group}>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className={styles.group}>
                    <input type="text" name="lastName" id="lastName" required />
                    <label htmlFor="lastName">Last name</label>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.group}>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="email">E-mail</label>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.group}>
                    <input type="tel" name="phone" id="phone" inputMode="tel" required />
                    <label htmlFor="phone">Phone</label>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.group}>
                    <select name="origin" id="origin" value={origin} onChange={(event: ChangeEvent<HTMLSelectElement>) => setOrigin(event.target.value)}>
                        <option></option>
                        {originList.map((origin, index) => (
                            <option key={index} value={origin}>{origin}</option>
                        ))}
                    </select>
                    <label htmlFor="origin">How did you meet us?</label>
                </div>

                {needToSpecifyList.includes(origin) &&
                    <div className={styles.group}>
                        <input type="text" name="specify" id="specify" autoFocus />
                        <label htmlFor="specify">Please, specify...</label>
                    </div>
                }
            </div>

            <div className={styles.row}>
                <div className={styles.group}>
                    <textarea name="message" id="message" required></textarea>
                    <label htmlFor="message">How can we help you?</label>
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.note}>
                    Note: leave your permission so that we can contact you, via email or cell phone.
                </p>

                <button type="submit" className={styles.submit} title="Click to contact us" disabled={isSendingForm}>
                    <Image src="/img/ico/send.svg" alt="Send form" layout="fill" objectFit="contain" />
                </button>
            </div>

            <ReCAPTCHA
                ref={recaptchaReference}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY ?? ""} />
        </form>
    )
}
