import Heading from "@components/heading/Heading"
import styles from "./Textbox.module.sass"

type Props = {
    children: JSX.Element[]
}

export default function Textbox({ children }: Props): JSX.Element {
    const hasHeading: boolean = children.some((child: JSX.Element) => child.type === Heading)
    const hasParagraph: boolean = children.some((child: JSX.Element) => child.type === "p")
    if (!hasHeading && !hasParagraph) throw new Error("Textbox must have at least one of Heading or p")

    return (
        <div className={styles.textbox}>
            {children}
        </div>
    )
}
