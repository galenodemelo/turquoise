import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Contact from "@layouts/index/contact/Contact"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
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
                Santa Rosa Beach prides itself on having consistently gorgeous weather, stunning beaches, and crystal clear waters. The fresh air, light breeze, and calming essence promise to rejuvenate your soul.
            </p>

            <div>
                <Button href={`#${Contact.name}`} variant="secondary">
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
            sizes="60vw"
        />
    )
}
