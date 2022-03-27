import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./Form.module.sass"

export default function Form(): JSX.Element {
    const [isSendingForm, setIsSendingForm] = useState<boolean>(false)
    const formReference = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (!formReference?.current) return
        formReference.current.onsubmit = async (event: SubmitEvent) => {
            if (!formReference?.current) return

            try {
                event.preventDefault()
                setIsSendingForm(true)

                const formData: FormData = new FormData(formReference.current)
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
                if (!responseJson.success) {
                    alert(responseJson.errorList.join("\n"))
                    return
                }

                alert(responseJson.message)
                formReference.current.reset()
            } catch (error) {
                console.error(error)
                setIsSendingForm(false)
            }
        }
    }, [formReference, isSendingForm])

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
                    <select name="origin" id="origin">
                        <option></option>
                        <option value="friend">Friend's referral</option>
                    </select>
                    <label htmlFor="origin">How did you meet us?</label>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.group}>
                    <textarea name="message" id="message" required></textarea>
                    <label htmlFor="message">How can we help you?</label>

                    <button type="submit" className={styles.submit} title="Click to contact us" disabled={isSendingForm}>
                        <Image src="/img/ico/arrow.svg" alt="Send form" layout="fill" objectFit="contain" />
                    </button>
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.note}>
                    Note: leave your permission so that we can contact you, via email or cell phone.
                </p>
            </div>
        </form>
    )
}
