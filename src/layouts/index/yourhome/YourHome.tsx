import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import textboxStyles from "@layouts/templates/textwithslider/textbox/Textbox.module.sass"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import Contact from "../contact/Contact"

export default function YourHome(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.scaleIn(slideElement.current?.querySelectorAll(`.swiper-slide-active img`)) ?? [],
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${headingStyles.heading} > *`), { delay: 800 }) ?? [],
            AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${textboxStyles.textbox} > p`), { delay: 1200 }) ?? [],
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
        <TextWithSlider direction="rtl" refObject={slideElement}>
            <Textbox>
                <Heading
                    lineList={[
                        { text: "Your", color: "primary", weight: "regular" },
                        { text: "home", color: "secondary", weight: "regular" }
                    ]}
                />
                <p>
                    Turquoise provides an enchanting environment both day and night. Leave your watch behind because time stands still in this opulent paradise. This worldrenowned 30A corridor attracts visitors worldwide with the most gorgeous beaches and fair weather.
                </p>

                <div>
                    <Button href={`#${Contact.name}`} variant="secondary">
                        Contact us
                    </Button>
                </div>
            </Textbox>

            <GallerySwiper>
                <Image
                    src="/img/slider/yourhome/1-key-inside-box.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </GallerySwiper>
        </TextWithSlider>
    )
}
