import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"

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
                    Apis est aut evel et arunt<br />
                    millenihilit pore, volutes<br />
                    totatum nectati<br />
                    umquistiorum ipsam<br />
                    iumquis simus et, quae
                </p>

                <div>
                    <Button href="#" variant="secondary">
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