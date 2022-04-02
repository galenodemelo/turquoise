import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import SETTINGS from "src/settings"
import styles from "./CreativeTeam.module.sass"

export default function CreativeTeam(): JSX.Element {
    return (
        <div className={[styles.creativeTeam, "centered-slide"].join(" ")}>
            <Heading lineList={[{ text: "Creative team", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {SETTINGS.CREATIVE_TEAM_LIST.map((member, index) => (
                    <li key={index} className={styles.member}>
                        <PhotoWithText {...buildPhotoWithTextParams(member.photo, member.name, member.description, "vertical", member.position)} />

                        {member.houseProjectList &&
                            <div className={styles.button}>
                                <Button variant="secondary">
                                    House project
                                </Button>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}
