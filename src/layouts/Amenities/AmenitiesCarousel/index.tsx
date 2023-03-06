import Carousel from "@components/Carousel";
import Popover from "@components/Popover";
import RotatePhone from "@components/RotatePhone";
import Image from "next/image";
import React from "react";
import Amenities from "..";

interface Props {
    isActive: boolean;
    setIsActive: (active: boolean) => void;
}

export default class AmenitiesCarousel extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Popover isActive={this.props.isActive}>
                <Carousel closeFunction={() => this.props.setIsActive(false)}>
                    {Amenities.accordionList.map((item, index) => {
                        return <Image src={item.imagePath} layout="fill" alt={item.header} objectFit="cover" objectPosition="center center" key={index} />;
                    })}
                </Carousel>

                <RotatePhone forceOrientation="landscape" />
            </Popover>
        );
    }
}
