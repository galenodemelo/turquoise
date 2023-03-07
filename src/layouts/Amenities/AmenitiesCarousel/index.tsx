import Carousel from "@components/Carousel";
import Popover from "@components/Popover";
import Image from "next/image";
import React from "react";
import { Swiper as SwiperConfig } from "swiper";
import Amenities, { Amenity } from "..";

interface Props {
    amenity?: Amenity;
    isActive: boolean;
    setIsActive: (active: boolean) => void;
}

export default class AmenitiesCarousel extends React.Component<Props, {}> {

    swiperInstance?: SwiperConfig;

    constructor(props: Props) {
        super(props);
    }

    getInitialSlide(): number {
        if (!this.props.amenity) return 0;

        const index = Amenities.accordionList.findIndex(item => item.amenity === this.props.amenity);
        return index !== -1 ? index : 0;
    }

    componentDidUpdate(): void {
        if (!this.swiperInstance) return;
        this.swiperInstance.slideTo(this.getInitialSlide());;
    }

    render(): JSX.Element {
        return (
            <Popover isActive={this.props.isActive}>
                <Carousel closeFunction={() => this.props.setIsActive(false)} getSwiperInstance={(swiper: SwiperConfig) => this.swiperInstance = swiper}>
                    {Amenities.accordionList.map((item, index) => {
                        return <Image src={item.imagePath} layout="fill" alt={item.header} objectFit="cover" objectPosition="center center" key={index} />;
                    })}
                </Carousel>
            </Popover>
        );
    }
}
