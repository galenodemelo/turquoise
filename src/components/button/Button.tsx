import Image from "next/image"
import styles from "./Button.module.sass"

export type Props = {
    children?: any
    disabled?: boolean
    download?: boolean
    href?: string
    icon?: string
    target?: string
    variant?: "primary" | "secondary"
    onClick?: () => void
}

export default function Button({ children, disabled = false, download = false, href, icon, onClick, variant = "primary", target }: Props): JSX.Element {
    const Tag = href ? "a" : "button"
    const buttonClassList = [styles.button, styles[`button--${variant}`]]

    return (
        <Tag href={href} className={buttonClassList.join(" ")} onClick={onClick} target={target} disabled={disabled} download={download}>
            {children && <span data-content-type="text">{children}</span>}
            {icon &&
                <span className={styles.icon}>
                    <Image src={`/img/ico/${icon}.svg`} className={styles.icon} width="20px" height="20px" />
                </span>
            }
        </Tag>
    )
}
