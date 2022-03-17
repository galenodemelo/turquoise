import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
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

export function SurroundedImage(): JSX.Element {
    return (
        <Image
            src="/img/slider/surrounded/1-family-playing-golf.jpg"
            layout="fill"
            objectFit="cover"
        />
    )
}
