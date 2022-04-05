import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"
import Contact from "../contact/Contact"

export default function YourHome(): JSX.Element {
    return (
        <TextWithSlider direction="rtl">
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
