import Icon from "@components/icon/Icon"
import SETTINGS from "src/settings"
import styles from "./Menu.module.sass"
import MenuLink from "./menulink/MenuLink"

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
                <a href={SETTINGS.SOCIAL_LINKS.INSTAGRAM}>
                    <Icon filename="instagram.svg" alt="Follow us on Instagram" size="2x" />
                </a>

                <a href={SETTINGS.SOCIAL_LINKS.FACEBOOK}>
                    <Icon filename="facebook.svg" alt="Like us on Facebook" size="2x" />
                </a>
            </nav>
        </div>
    )
}
