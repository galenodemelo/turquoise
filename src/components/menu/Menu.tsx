import Icon from "@components/icon/Icon"
import MenuLink from "./menulink/MenuLink"
import styles from "./Menu.module.sass"

export default function Menu(): JSX.Element {
    return (
        <div className={styles.menu}>
            <nav className={styles.link}>
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#team">Team</MenuLink>
                <MenuLink href="#developers">Developers</MenuLink>
                <MenuLink href="#location">Location</MenuLink>
                <MenuLink href="#contact">Contact</MenuLink>
            </nav>
            <nav className={styles.social}>
                <Icon filename="instagram.svg" alt="Follow us on Instagram" size="2x" />
                <Icon filename="facebook.svg" alt="Like us on Facebook" size="2x" />
            </nav>
        </div>
    )
}
