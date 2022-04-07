import styles from "./Button.module.sass"

export type Props = {
    children: string | JSX.Element | JSX.Element[]
    href?: string
    target?: string
    variant?: "primary" | "secondary"
    onClick?: () => void
}

export default function Button({ children, href, onClick, variant = "primary", target }: Props): JSX.Element {
    const Tag = href ? "a" : "button"
    const buttonClassList = [styles.button, styles[`button--${variant}`]]

    return (
        <Tag href={href} className={buttonClassList.join(" ")} onClick={onClick} target={target}>
            {children}
        </Tag>
    )
}
