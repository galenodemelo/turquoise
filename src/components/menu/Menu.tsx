import Icon from "@components/icon/Icon"
import Contact from "@layouts/index/contact/Contact"
import Masterplan from "@layouts/index/masterplan/Masterplan"
import VideoWithLogo from "@layouts/index/videowithlogo/VideoWithLogo"
import SETTINGS from "src/settings"
import styles from "./Menu.module.sass"
import MenuLink from "./menulink/MenuLink"

export default function Menu(): JSX.Element {
    return (
        <div className={styles.menu}>
            <nav className={styles.link}>
                <MenuLink href={`#${VideoWithLogo.name}`}>Home</MenuLink>
                <MenuLink href={`#${Masterplan.name}`}>Masterplan</MenuLink>
                <MenuLink href={`#${Contact.name}`}>Contact</MenuLink>
            </nav>
            <nav className={styles.social}>
                <a href={SETTINGS.SOCIAL_LINKS.INSTAGRAM} rel="noopener noreferrer" target="_blank">
                    <Icon filename="instagram.svg" alt="Follow us on Instagram" size="2x" />
                </a>

                <a href={SETTINGS.SOCIAL_LINKS.FACEBOOK} rel="noopener noreferrer" target="_blank">
                    <Icon filename="facebook.svg" alt="Like us on Facebook" size="2x" />
                </a>
            </nav>
        </div>
    )
}
