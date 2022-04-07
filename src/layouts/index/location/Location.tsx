import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import Image from "next/image"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Location.module.sass"
import Map from "./map/Map"

export default function Location(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${headingStyles.heading} > *`)) ?? [],
            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.mapContainer}`), { delay: 800 }) ?? [],
        )

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
        <div className={styles.location} ref={slideElement}>
            <Heading lineList={[{ text: "Local", color: "primary" }]} />

            <div className={styles.mapContainer}>
                <Map />

                <div className={styles.thumb}>
                    <Image src="/img/map/location-thumb.jpg" layout="fill" objectFit="cover" alt="Overview of Florida location" />
                </div>
            </div>
        </div>
    )
}
