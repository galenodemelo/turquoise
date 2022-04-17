import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Contact from "@layouts/index/contact/Contact"
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
                Toss your troubles away <br />
                as you float on the bay <br />
                under the glorious blue <br />
                sky and over translucent <br />
                waters. Get away from it <br />
                all, set anchor, and while <br />
                away the hours with only <br />
                your loved ones by your <br />
                side. Truly heaven on <br />
                Earth.
            </p>

            <div>
                <Button href={`#${Contact.name}`} variant="secondary">
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
            sizes="60vw"
        />
    )
}
