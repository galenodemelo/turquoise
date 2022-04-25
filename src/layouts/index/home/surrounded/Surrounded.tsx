import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Contact from "@layouts/index/contact/Contact"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import Image from "next/image"

export function SurroundedTextbox(): JSX.Element {
    return (
        <Textbox>
            <Heading
                lineList={[
                    { text: "Surrounded", color: "secondary", weight: "light" },
                    { text: "by green", color: "primary", weight: "medium" },
                    { text: "and blue", color: "primary", weight: "medium" }
                ]}
            />
            <p>
                Allow yourself to dream. Now live that dream, as our elegant serenity awaits you. Escape the turmoil of a busy life to a land of pristine simplicity. Take your putter to the green or spend your afternoon out in the blue...
            </p>

            <div>
                <Button href={`#${Contact.name}`} variant="secondary">
                    Contact us
                </Button>
            </div>
        </Textbox>
    )
}

export function SurroundedImage(): JSX.Element {
    return (
        <Image
            src="/img/slider/surrounded/1-family-playing-golf.jpg"
            layout="fill"
            objectFit="cover"
            sizes="60vw"
        />
    )
}
