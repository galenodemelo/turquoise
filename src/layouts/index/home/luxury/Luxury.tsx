import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import Image from "next/image"

export function LuxuryTextbox(): JSX.Element {
    return (
        <Textbox>
            <Heading
                lineList={[
                    { text: "An icon of", color: "primary", weight: "light" },
                    { text: "luxury", color: "primary", weight: "medium" },
                    { text: "and", color: "secondary", weight: "light" },
                    { text: "exclusivity", color: "secondary", weight: "medium" }
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

export function LuxuryImage(): JSX.Element {
    return (
        <Image
            src="/img/slider/luxury/1-diamond-on-fabric.jpg"
            layout="fill"
            objectFit="cover"
        />
    )
}
