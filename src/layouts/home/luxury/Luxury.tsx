import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"

export default function Luxury(): JSX.Element {
    return (
        <TextWithSlider>
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

        </TextWithSlider>
    )
}
