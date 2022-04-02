import styles from "./Button.module.sass"

type Props = {
    children: string | JSX.Element | JSX.Element[]
    href?: string
    variant?: "primary" | "secondary"
    onClick?: () => void
}

export default function Button({ children, href, onClick, variant = "primary" }: Props): JSX.Element {
    const Tag = href ? "a" : "button"
    const buttonClassList = [styles.button, styles[`button--${variant}`]]

    return (
        <Tag href={href} className={buttonClassList.join(" ")} onClick={onClick}>
            {children}
        </Tag>
    )
}
