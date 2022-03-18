import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"

export function NatureTextbox(): JSX.Element {
    return (
        <Textbox>
            <Heading
                lineList={[
                    { text: "Feel the", color: "secondary", weight: "light" },
                    { text: "nature", color: "primary", weight: "medium" }
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
    )
}

export function NatureImage(): JSX.Element {
    return (
        <Image
            src="/img/slider/nature/1-couple-walking-on-beach.jpg"
            layout="fill"
            objectFit="cover"
        />
    )
}
