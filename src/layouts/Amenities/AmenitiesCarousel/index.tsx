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

    close() {
        this.props.setIsActive(false);
        setTimeout(() => this.swiperInstance?.slideTo(0), 2000);
    }

    render(): JSX.Element {
        return (
            <Popover isActive={this.props.isActive} closeFunction={() => this.close()}>
                <Carousel getSwiperInstance={(swiper: SwiperConfig) => this.swiperInstance = swiper}>
                    {Amenities.accordionList.map((item, index) => {
                        return <Image src={item.imagePath} layout="fill" alt={item.header} objectFit="cover" objectPosition="center center" key={index} />;
                    })}
                </Carousel>
            </Popover>
        );
    }
}
