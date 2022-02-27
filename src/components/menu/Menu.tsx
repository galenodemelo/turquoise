import MenuLink from "./menulink/MenuLink"
import styles from "./Menu.module.sass"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <nav className={styles.link}>
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#team">Team</MenuLink>
                <MenuLink href="#developers">Developers</MenuLink>
                <MenuLink href="#location">Location</MenuLink>
                <MenuLink href="#contact">Contact</MenuLink>
            </nav>
        </div>
    )
}
