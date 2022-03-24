import Heading from "@components/heading/Heading"
import Image from "next/image"
import styles from "./Contact.module.sass"
import Form from "./form/Form"

export default function Contact(): JSX.Element {
    return (
        <div className={[styles.contact, "centered-slide"].join(" ")}>
            <Heading
                lineList={[
                    { text: "Contact us", color: "primary" }
                ]}
            />

            <div className={styles.content}>
                <Form />

                <div className={styles.logo}>
                    <Image src="/img/turquoise-texturized-logo.png" layout="fill" objectFit="contain" />
                </div>
            </div>
        </div>
    )
}
