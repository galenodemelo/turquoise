import headingStyles from "@components/heading/Heading.module.sass"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import { RefObject, useEffect, useRef, useState } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import { Swiper } from "swiper/react"
import { LuxuryImage, LuxuryTextbox } from "./luxury/Luxury"
import { NatureImage, NatureTextbox } from "./nature/Nature"
import { SurroundedImage, SurroundedTextbox } from "./surrounded/Surrounded"

export default function Home(): JSX.Element {
    const [textboxSwiperInstance, setTextboxSwiperInstance] = useState<Swiper>()
    const [imageSwiperInstance, setImageSwiperInstance] = useState<Swiper>()

    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.swiper-slide-active .${headingStyles.heading} > *`)) ?? [],
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
        <TextWithSlider refObject={slideElement}>
            <GallerySwiper setSwiperInstance={setTextboxSwiperInstance} controller={imageSwiperInstance} effect="fade">
                <LuxuryTextbox />
                <NatureTextbox />
                <SurroundedTextbox />
            </GallerySwiper>

            <GallerySwiper setSwiperInstance={setImageSwiperInstance} controller={textboxSwiperInstance}>
                <LuxuryImage />
                <NatureImage />
                <SurroundedImage />
            </GallerySwiper>
        </TextWithSlider>
    )
}
