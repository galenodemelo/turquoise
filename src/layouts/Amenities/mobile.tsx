import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import { DarkGreenMask, FullSizeCenteredImage, MaskTitle } from "@styles/globals";
import React from "react";
import Amenities, { Amenity } from ".";
import { AmenitiesItem, AmenitiesItemHeader, AmenitiesList, AmenitiesWrapper } from "./style-mobile";

export interface Props {
    onAmenityClickMobile: (amenity: Amenity) => void;
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
                                <AmenitiesItem key={index} onClick={() => this.props.onAmenityClickMobile(item.amenity)}>
                                    <FullSizeCenteredImage src={item.imagePath} alt={item.header} />
                                    <AmenitiesItemHeader dangerouslySetInnerHTML={{ __html: item.header}} />
                                </AmenitiesItem>
                            );
                        })}
                    </AmenitiesList>
                </AmenitiesWrapper>
            </>
        );
    }
}
