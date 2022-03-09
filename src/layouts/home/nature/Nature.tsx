import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"

export default function Nature(): JSX.Element {
    return (
        <TextWithSlider>
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
        </TextWithSlider>
    )
}
