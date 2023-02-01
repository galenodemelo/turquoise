import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import Image from "next/image";
import { Bar, Icon, IconOfLuxuryAndExclusivityWrapper, Text } from "./style";

export default class IconOfLuxuryAndExclusivity extends AnimateOnActiveComponent {

    constructor(props: {}) {
        super(props, IconOfLuxuryAndExclusivity.name);
    }

    componentJsx(): JSX.Element {
        return (
            <IconOfLuxuryAndExclusivityWrapper triggeredAnimation={this.wasAnimatedAlready}>
                <Bar />

                <Text>
                    <h2>Icon of luxury and exclusivity</h2>
                    <p>
                        Toss your troubles away as you float on the gulf <br />
                        under the glorious blue sky and over <br />
                        translucent waters. Get away from it all, set <br />
                        anchor, and while away the hours with only your <br />
                        loved ones by your side. Truly heaven <br />
                        on Earth.
                    </p>
                </Text>

                <Icon>
                    <Image src="/img/turquoise-picto.svg" width={124} height={124} alt="Turquoise Q pictogram" />
                </Icon>
            </IconOfLuxuryAndExclusivityWrapper>
        )
    }
}
