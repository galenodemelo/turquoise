import Carousel from "@components/Carousel";
import Image from "next/image";
import React from "react";
import Amenities from "./index";
import { AmenitiesWrapper, CarouselItemTitle, CarouselWrapper, ExtraInfo } from "./style-desktop";

export interface State {
    activeIndex: number;
}

export default class AmenitiesDesktop extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render(): JSX.Element {
        return (
            <AmenitiesWrapper>
                <CarouselWrapper>
                    <Carousel>
                        {Amenities.accordionList.map((item, index) => {
                            return (
                                <>
                                    <Image src={item.imagePath} alt={item.header} layout="fill" key={index} quality={100} objectFit="cover" objectPosition="center center" priority={true} />
                                    <CarouselItemTitle>
                                        <span dangerouslySetInnerHTML={{
                                            __html: item.header
                                        }}></span>
                                    </CarouselItemTitle>
                                </>
                            );
                        })}
                    </Carousel>
                </CarouselWrapper>

                <ExtraInfo>
                    <span>No Short Term Rentals</span>
                    <span>Handicapped Accessible</span>
                </ExtraInfo>
            </AmenitiesWrapper>
        );
    }
}
