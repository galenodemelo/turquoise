import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import PhotoWithText, { buildPhotoWithTextParams } from "@layouts/templates/photowithtext/PhotoWithText"
import anime from "animejs"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Developers.module.sass"

export default function Developers(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const developerDataList: Array<DeveloperData> = listDevelopers()

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${styles.developers} > .${headingStyles.heading} > *`)) ?? [],
        )
        for (let i = 1; i <= developerDataList.length; i++) {
            const delay: number = (i - 1) * 1400
            animationList = animationList.concat(
                AnimationLib.slideInBottom(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) img`), { delay }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) .${headingStyles.heading} > *`), { delay: delay + 1200 }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.member}:nth-of-type(${i}) p`), { delay: delay + 1800 }) ?? [],
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
        <div className={[styles.developers, "centered-slide"].join(" ")} ref={slideElement}>
            <Heading lineList={[{ text: "Developers", color: "primary", weight: "medium" }]} />

            <ul className={styles.memberList}>
                {developerDataList.map((member, index) => (
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
            name: "Marco Vazquez",
            position: "Bravo America Company",
            description: "To Investors: unparalleled risk reward; To The Neighborhood: setting the standard and raising the bar; To Clients: exclusivity, one of a kind standard of living; Wrap it all , this is \"Turquoise\"."
        },
        {
            photo: "luis.jpg",
            name: "Luis Noronha",
            position: "Lana Development",
            description: "The Concept of Turquoise was formed when we first arrived in the 30A.  The great energy and majestic nature of that place were embracing one of the last large parcels available in that area. The uniqueness and exclusivity of our site were something as incredible and precious as a gem."
        }
    ]
}
