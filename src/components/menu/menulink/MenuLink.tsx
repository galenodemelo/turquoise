import styles from "./MenuLink.module.sass"

type Props = {
    href: string
    children: JSX.Element | JSX.Element[]
}

export default function MenuLink({ href, children }: Props): JSX.Element {
    return (
        <a href={href} className={styles.menuLink}>
            {children}
        </a>
    )
}
