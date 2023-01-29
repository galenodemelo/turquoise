import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import { HousesBackground, HousesContent, HousesCTA, HousesWrapper } from "./style";

export default class Houses extends React.Component {

    render(): JSX.Element {
        return (
            <>
                <HousesBackground>
                    <Image src="/img/background-houses.jpg" layout="fill" objectFit="contain" objectPosition="left center" />
                </HousesBackground>
                <HousesWrapper>
                    <HousesContent>
                        <SectionHeading extraMargin={false}>Houses</SectionHeading>
                        <p>7 different models designed by renowned architects.</p>
                        <p>Exclusive models available upon request.</p>
                        <p>Sizes from 3,200 to 5,500 sqft.</p>
                        <HousesCTA>
                            Our residences
                        </HousesCTA>
                    </HousesContent>
                </HousesWrapper>
            </>
        )
    }
}
