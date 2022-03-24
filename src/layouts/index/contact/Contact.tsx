import Heading from "@components/heading/Heading"
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
            </div>
        </div>
    )
}
