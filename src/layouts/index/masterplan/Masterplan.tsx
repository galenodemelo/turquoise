import Button from "@components/button/Button"
import buttonStyles from "@components/button/Button.module.sass"
import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import Image from "next/image"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Masterplan.module.sass"

export default function Masterplan(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${headingStyles.heading} > *`), { duration: 1400 }) ?? [],
            AnimationLib.scaleIn(slideElement.current?.querySelectorAll(`.${styles.cover} > *`), { duration: 600 }) ?? [],

            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:first-of-type`), { delay: 400, duration: 400 }) ?? [],
            AnimationLib.widthIn(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:first-of-type`), { delay: 400, duration: 1400 }) ?? [],

            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:last-of-type`), { delay: 2600, duration: 10 }) ?? [],
            AnimationLib.slideInLeft(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:last-of-type`), { delay: 2600, duration: 800 }) ?? [],

            AnimationLib.popInFromDown(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:first-of-type > span:first-of-type`), { delay: 1400 }) ?? [],
            AnimationLib.popInFromDown(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:first-of-type > span:last-of-type`), { delay: 2800 }) ?? [],
            AnimationLib.popInFromDown(slideElement.current?.querySelectorAll(`.${buttonStyles.button}:last-of-type > span:first-of-type`), { delay: 3200 }) ?? [],
        )

        new AnimationTriggerBuilder()
            .setElementToBeObserved(slideElement)
            .addAnimationFunction(() => {
                setTimeout(() => {
                    animationList.forEach((animation: anime.AnimeInstance) =>  animation.play())
                }, 800)
            })
            .build()
    }, [slideElement])

    return (
        <div className={[styles.masterplan, "centered-slide"].join(" ")} ref={slideElement}>
            <Heading lineList={[ {text: "Masterplan", color: "white"} ]} />

            <div className={styles.cover}>
                <Image src="/img/masterplan.jpg" layout="fill" objectFit="cover" loading="eager" />
            </div>

            <nav className={styles.navigation}>
                <Button icon="arrow" href="https://player.theviewvr.com/?locationId=1298" target="_blank">
                    Start tour
                </Button>
                <Button icon="pdf-download" href="javascript: alert('Dummy alert. Awaiting PDF final version')"></Button>
            </nav>
        </div>
    )
}
