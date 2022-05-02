import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import Image from "next/image"
import { RefObject, useEffect, useRef, useState } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Contact.module.sass"
import Form from "./form/Form"

export default function Contact(): JSX.Element {
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${headingStyles.heading} > *`)) ?? [],
            AnimationLib.fadeInBottom(slideElement.current?.querySelectorAll(`.${styles.content} > form`), { delay: 200 }) ?? [],
            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.logo}`), { delay: 800 }) ?? [],
            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${styles.downloadLink}`), { delay: 1000 }) ?? [],
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
        <div className={[styles.contact, "centered-slide"].join(" ")} ref={slideElement}>
            <Heading
                lineList={[
                    { text: "Contact us", color: "primary" }
                ]}
            />

            <div className={styles.content}>
                <Form setIsFormValid={setIsFormValid} />

                <div className={styles.download}>
                    <div className={styles.logo}>
                        <Image src="/img/turquoise-texturized-logo.png" layout="fill" objectFit="contain" />
                    </div>

                    <div className={styles.downloadLink}>
                        <p>Fill in the form to download our material.</p>
                        {!isFormValid ?
                            <Button disabled={true}>
                                Download
                            </Button>
                            :
                            <Button href="/docs/turquoise.homes-material.pdf" download={true} target="_blank">
                                Download
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
