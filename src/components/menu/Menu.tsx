import Icon from "@components/icon/Icon"
import Contact from "@layouts/index/contact/Contact"
import CreativeTeam from "@layouts/index/creativeteam/CreativeTeam"
import Developers from "@layouts/index/developers/Developers"
import Home from "@layouts/index/home/Home"
import SETTINGS from "src/settings"
import styles from "./Menu.module.sass"
import MenuLink from "./menulink/MenuLink"

export default function Menu(): JSX.Element {
    return (
        <div className={styles.menu}>
            <nav className={styles.link}>
                <MenuLink href={`#${Home.name}`}>Home</MenuLink>
                <MenuLink href={`#${CreativeTeam.name}`}>Team</MenuLink>
                <MenuLink href={`#${Developers.name}`}>Developers</MenuLink>
                <MenuLink href="#location">Location</MenuLink>
                <MenuLink href={`#${Contact.name}`}>Contact</MenuLink>
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
