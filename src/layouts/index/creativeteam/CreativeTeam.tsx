import Heading from "@components/heading/Heading"
import PhotoWithText, { Props as PhotoWithTextProps } from "@layouts/templates/photowithtext/PhotoWithText"
import SETTINGS from "src/settings"
import styles from "./CreativeTeam.module.sass"

export default function CreativeTeam(): JSX.Element {
    return (
        <div className={[styles.creativeTeam, "centered-slide"].join(" ")}>
            <Heading lineList={[{ text: "Creative team", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {SETTINGS.MEMBER_LIST.map((member, index) => (
                    <li key={index} className={styles.member}>
                        <PhotoWithText {...buildPhotoWithTextParams(member.photo, member.name, member.position, member.description)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function buildPhotoWithTextParams(photo: string, name: string, position: string, description: string): PhotoWithTextProps {
    return {
        image: `/img/members/${photo}`,
        heading: {
            lineList: [
                { text: name, color: "black", weight: "bold" },
                { text: position, color: "black", weight: "light" }
            ],
            size: "h3"
        },
        text: description,
        variant: "vertical"
    }
}
