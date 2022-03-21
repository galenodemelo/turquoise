import Heading from "@components/heading/Heading"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import SETTINGS from "src/settings"
import styles from "./Developers.module.sass"

export default function Developers(): JSX.Element {
    return (
        <div className={[styles.developers, "centered-slide"].join(" ")}>
            <Heading lineList={[{ text: "Developers", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {SETTINGS.DEVELOPERS_LIST.map((member, index) => (
                    <li key={index} className={styles.member}>
                        <PhotoWithText {...buildPhotoWithTextParams(member.photo, member.name, member.description, "horizontal")} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
