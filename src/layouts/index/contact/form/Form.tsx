import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./Form.module.sass"

export default function Form(): JSX.Element {
    const [isSendingForm, setIsSendingForm] = useState<boolean>(false)
    return (
        <form action="/api/send-contact-form" method="POST" className={styles.form}>
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
