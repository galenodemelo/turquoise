import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import { LuxuryImage, LuxuryTextbox } from "./luxury/Luxury"
import { NatureImage, NatureTextbox } from "./nature/Nature"
import { SurroundedImage, SurroundedTextbox } from "./surrounded/Surrounded"

export default function Home(): JSX.Element {
    return (
        <TextWithSlider>
            <GallerySwiper>
                <LuxuryTextbox />
                <NatureTextbox />
                <SurroundedTextbox />
            </GallerySwiper>

            <GallerySwiper>
                <LuxuryImage />
                <NatureImage />
                <SurroundedImage />
            </GallerySwiper>
        </TextWithSlider>
    )
}
