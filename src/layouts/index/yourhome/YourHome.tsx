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
                    Turquoise provides an<br />
                    enchanting environment<br />
                    both day and night. Leave<br />
                    your watch behind<br />
                    because time stands still in<br />
                    this opulent paradise. This<br />
                    world-renowned 30A<br />
                    corridor attracts<br />
                    visitors worldwide with<br />
                    the most opulent beaches<br />
                    and fair weather.
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
