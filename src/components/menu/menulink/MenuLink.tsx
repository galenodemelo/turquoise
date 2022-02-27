import styles from "./MenuLink.module.sass"

type Props = {
    href: string,
    children: React.ReactNode
}

export default function MenuLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.menuLink}>
            {children}
        </a>
    )
}
