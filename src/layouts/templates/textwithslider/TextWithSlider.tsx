import styles from "./TextWithSlider.module.sass"

type Props = {
    children: JSX.Element[],
    direction?: "ltr" | "rtl"
}

export default function TextWithSlider({ children, direction = "ltr" }: Props): JSX.Element {
    const directionVariantClassName = styles[`textWithSlider--${direction}`]

    return (
        <div className={[styles.textWithSlider, directionVariantClassName, "centered-slide"].join(" ")}>
            {children}
        </div>
    )
}
