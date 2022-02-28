import Logo from "@components/logo/Logo"
import Menu from "@components/menu/Menu"
import styles from "./Header.module.sass"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <Menu />
            </div>
        </header>
    )
}
