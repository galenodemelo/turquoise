import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import { DarkGreenMask, MaskTitle } from "@styles/globals";
import Image from "next/image";
import React from "react";
import Amenities from ".";
import { AmenitiesItem, AmenitiesList, AmenitiesWrapper } from "./style-mobile";

export interface Props {
    onAmenityClickMobile: () => void;
}

export default class AmenitiesMobile extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <>
                <AmenitiesWrapper>
                    <SectionHeading>Amenities</SectionHeading>

                    <AmenitiesList>
                        {Amenities.accordionList.map((item, index) => {
                            return (
                                <AmenitiesItem key={index} onClick={this.props.onAmenityClickMobile}>
                                    <Image src={item.imagePath} layout="fill" alt={item.header} objectFit="cover" objectPosition="center center" priority={true} />
                                    <DarkGreenMask />
                                    <MaskTitle dangerouslySetInnerHTML={{ __html: item.header }} />
                                </AmenitiesItem>
                            );
                        })}
                    </AmenitiesList>
                </AmenitiesWrapper>
            </>
        );
    }
}
