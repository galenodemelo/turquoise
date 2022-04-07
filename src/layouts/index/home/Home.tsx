import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import { RefObject, useEffect, useRef, useState } from "react"
import { Swiper } from "swiper/react"
import { LuxuryImage, LuxuryTextbox } from "./luxury/Luxury"
import { NatureImage, NatureTextbox } from "./nature/Nature"
import { SurroundedImage, SurroundedTextbox } from "./surrounded/Surrounded"

export default function Home(): JSX.Element {
    const [textboxSwiperInstance, setTextboxSwiperInstance] = useState<Swiper>()
    const [imageSwiperInstance, setImageSwiperInstance] = useState<Swiper>()

    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
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
