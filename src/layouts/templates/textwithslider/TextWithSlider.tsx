import { RefObject } from "react"
import styles from "./TextWithSlider.module.sass"

type Props = {
    children: JSX.Element[],
    direction?: "ltr" | "rtl"
    refObject?: RefObject<HTMLDivElement>
}

export default function TextWithSlider({ children, direction = "ltr", refObject }: Props): JSX.Element {
    const directionVariantClassName = styles[`textWithSlider--${direction}`]

    return (
        <div className={[styles.textWithSlider, directionVariantClassName, "centered-slide"].join(" ")} ref={refObject}>
            {children}
        </div>
    )
}
