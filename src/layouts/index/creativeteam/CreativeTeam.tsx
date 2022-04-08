import Button, { type Props as ButtonProps } from "@components/button/Button"
import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./CreativeTeam.module.sass"
import HouseProjectGallery, { HouseProjectProps } from "./houseprojectgallery/HouseProjectGallery"

export default function CreativeTeam(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const creativeTeamList: Array<CreativeTeamMember> = listCreativeTeam()

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${styles.creativeTeam} > .${headingStyles.heading} > *`)) ?? [],
        )
        for (let i = 1; i <= creativeTeamList.length; i++) {
            const delay: number = (i - 1) * 1600
            animationList = animationList.concat(
                AnimationLib.slideInBottom(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) img`), { delay }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) .${headingStyles.heading} > *`), { delay: delay + 1200 }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) p`), { delay: delay + 1800 }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) button, .${styles.member}:nth-of-type(${i}) a`), { delay: delay + 2200 }) ?? [],
            )
        }

        new AnimationTriggerBuilder()
            .setElementToBeObserved(slideElement)
            .addAnimationFunction(() => {
                setTimeout(() => {
                    animationList.forEach((animation: anime.AnimeInstance) => animation.play())
                }, 800)
            })
            .build()
    }, [slideElement])

    return (
        <div className={[styles.creativeTeam, "centered-slide"].join(" ")} ref={slideElement}>
            <Heading lineList={[{ text: "Designers", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {creativeTeamList.map((member, index) => (
                    <li key={index} className={styles.member}>
                        <PhotoWithText {...buildPhotoWithTextParams(member.photo, member.name, member.description, "vertical", member.position)} />

                        {member.houseProjectList &&
                            <HouseProjectGallery houseProjectList={member.houseProjectList} />
                        }

                        {member.button &&
                            <Button variant="secondary" {...member.button} />
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
    button?: ButtonProps
}

function listCreativeTeam(): Array<CreativeTeamMember> {
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
            description: "I\'m very excited to be a member of the design team for the Turquoise project. Turquoise will be the first master planned coastal community of its kind in the 30A market. Its distinctive and exclusive because it offers home buyers a community which emphasizes clean, modern architectural design in beautiful natural setting as well as generally larger homesites than are currently available in the luxury home echelon.",
            button: {
                href: "https://player.theviewvr.com/?locationId=1298",
                target: "_blank",
                children: "Masterplan"
            }
        }
    ]
}
