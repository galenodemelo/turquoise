import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import { HousesBackground, HousesContent, HousesCTA, HousesWrapper } from "./style";

interface Props {
    onCtaClick?: () => void
}

export default class Houses extends AnimateOnActiveComponent<Props, {}> {

    constructor(props: Props) {
        super(props, Houses.name);
    }

    componentJsx(): JSX.Element {
        return (
            <>
                <HousesBackground triggeredAnimation={this.wasAnimatedAlready}>
                    <Image src="/img/background-houses.jpg" layout="fill" objectFit="contain" objectPosition="left center" alt="Golden key on a gift box" />
                </HousesBackground>
                <HousesWrapper>
                    <HousesContent triggeredAnimation={this.wasAnimatedAlready}>
                        <SectionHeading extraMargin={false}>Houses</SectionHeading>
                        <p>7 different models designed by renowned architects.</p>
                        <p>Exclusive models available upon request.</p>
                        <p>Sizes from 3,200 to 5,500 sqft.</p>
                        <HousesCTA onClick={this.props.onCtaClick}>
                            Our residences
                        </HousesCTA>
                    </HousesContent>
                </HousesWrapper>
            </>
        )
    }
}
