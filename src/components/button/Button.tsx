import Image from "next/image"
import styles from "./Button.module.sass"

export type Props = {
    children?: any
    href?: string
    icon?: string
    target?: string
    variant?: "primary" | "secondary"
    onClick?: () => void
}

export default function Button({ children, href, icon, onClick, variant = "primary", target }: Props): JSX.Element {
    const Tag = href ? "a" : "button"
    const buttonClassList = [styles.button, styles[`button--${variant}`]]

    return (
        <Tag href={href} className={buttonClassList.join(" ")} onClick={onClick} target={target}>
            {children && <span data-content-type="text">{children}</span>}
            {icon &&
                <span className={styles.icon}>
                    <Image src={`/img/ico/${icon}.svg`} className={styles.icon} width="20px" height="20px" />
                </span>
            }
        </Tag>
    )
}
