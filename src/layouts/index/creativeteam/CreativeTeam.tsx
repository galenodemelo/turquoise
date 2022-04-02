import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import styles from "./CreativeTeam.module.sass"
import { Props as HouseProjectProps } from "./houseproject/HouseProject"

export default function CreativeTeam(): JSX.Element {
    return (
        <div className={[styles.creativeTeam, "centered-slide"].join(" ")}>
            <Heading lineList={[{ text: "Creative team", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {getCreativeTeamList().map((member, index) => (
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

type CreativeTeamMember = {
    photo: string
    name: string
    description: string
    position: string
    houseProjectList?: Array<HouseProjectProps>
}

function getCreativeTeamList(): Array<CreativeTeamMember> {
    return [
        {
            photo: "ricardo.jpg",
            name: "Ricardo",
            position: "Architect",
            description: "By design nature calmly flows from the exterior into the modern interior. The wooden roof overhang feels warm and inviting, and the cathedral ceilings pull in natural light. The floating wood stairs and glass railing feel earthy yet free, and the summer kitchen outside completes the fusion of interior with exterior living.",
            houseProjectList: [
                {
                    name: "Ricardo Rodrigues",
                    image: "ricardo-rodrigues-1.jpg"
                },
                {
                    name: "Ricardo Rodrigues",
                    image: "ricardo-rodrigues-2.jpg"
                },
                {
                    name: "Ricardo Rodrigues",
                    image: "ricardo-rodrigues-3.jpg",
                    title: "Club House"
                }
            ]
        },
        {
            photo: "taney.jpg",
            name: "Taney",
            position: "Architect",
            description: "I am really excited about the vision of Turquoise. Starting with Seaside, virtually all of the neighborhoods along 30A have have been conceived with a look back at traditional architecture. Turquoise finally offers me the opportunity to introduce a modern, unique aesthetic on a neighborhood scale along the Gulf Coast.",
            houseProjectList: [
                {
                    name: "Mark Taney",
                    image: "mark-taney-1.jpg"
                }
            ]
        },
        {
            photo: "russel-johnson.jpg",
            name: "Russel Johnson",
            position: "Architect",
            description: "Most exciting to be working on a project of this magnitude located within one of the most iconic beach locations in the world. Working with this development team is especially rewarding with their forward-looking ideas and design concepts.",
            houseProjectList: [
                {
                    name: "Russel Johnson",
                    image: "russel-johnson-1.jpg"
                },
                {
                    name: "Russel Johnson",
                    image: "russel-johnson-2.jpg"
                }
            ]
        },
        {
            photo: "patrick.jpg",
            name: "Patrick",
            position: "Masterplanner",
            description: "Patrick is senior landscape architect and master planner with extensive experience in land development and professional design practice including but not limited to master planning, urban design, site and amenity design, marketing, scheduling, and budgeting for residential communities, mixed-use, resort, commercial, civic, educational and resource-based recreational developments."
        }
    ]
}
