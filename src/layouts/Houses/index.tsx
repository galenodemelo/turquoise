import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import { isDesktop } from "react-device-detect";
import { HousesBackground, HousesContent, HousesCTA, HousesWrapper } from "./style";

interface Props {
    onCtaClick?: () => void
}

export default class Houses extends AnimateOnActiveComponent<Props, {}> {

    constructor(props: Props) {
        super(props, "Houses");
    }

    componentJsx(): JSX.Element {
        return (
            <>
                <HousesBackground triggeredAnimation={this.wasAnimatedAlready}>
                    <Image
                        src={isDesktop ? "/img/background-houses.png" : "/img/background-houses-mobile.png"}
                        layout="fill"
                        objectFit="contain"
                        objectPosition={isDesktop ? "left center" : "left bottom"}
                        alt="Golden key on a gift box"
                        quality={100}
                    />
                </HousesBackground>
                <HousesWrapper>
                    <HousesContent triggeredAnimation={this.wasAnimatedAlready}>
                        <SectionHeading extraMargin={false}>Houses</SectionHeading>
                        <p>7 different models designed by renowned architects.</p>
                        <p>Exclusive models available upon request.</p>
                        <p>Sizes from 3,200 to 5,500 sqft.</p>
                        <HousesCTA onClick={this.props.onCtaClick}>
                            Show residences
                        </HousesCTA>
                    </HousesContent>
                </HousesWrapper>
            </>
        )
    }
}
