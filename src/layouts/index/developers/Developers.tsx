import Heading from "@components/heading/Heading"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import styles from "./Developers.module.sass"

export default function Developers(): JSX.Element {
    return (
        <div className={[styles.developers, "centered-slide"].join(" ")}>
            <Heading lineList={[{ text: "Developers", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {listDevelopers().map((member, index) => (
                    <li key={index} className={styles.member}>
                        <PhotoWithText {...buildPhotoWithTextParams(member.photo, member.name, member.description, "horizontal", member.position)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

type DeveloperData = {
    photo: string
    name: string
    description: string
    position: string
}

function listDevelopers(): Array<DeveloperData>  {
    return [
        {
            photo: "marco.jpg",
            name: "Marco Vázquez",
            position: "Member/Owner of a Bravo America",
            description: "To Investors: unparalleled risk reward; To The Neighborhood: setting the standard and raising the bar; To Clients: exclusivity, one of a kind standard of living; Wrap it all , this is \"Turquoise\"."
        },
        {
            photo: "luis.jpg",
            name: "Luís Noronha",
            position: "Member/Owner of a Lana Development",
            description: "The Concept of Turquoise was formed when we first arrived in the 30A.  The great energy and majestic nature of that place were embracing one of the last large parcels available in that area. The uniqueness and exclusivity of our site were something as incredible and precious as a gem."
        }
    ]
}
