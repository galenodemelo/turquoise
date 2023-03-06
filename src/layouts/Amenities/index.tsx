import React from "react";
import AmenitiesDesktop from "./desktop";
import AmenitiesMobile, { Props as AmenitiesMobileProps } from "./mobile";

interface Props extends AmenitiesMobileProps {
    isMobile: boolean;
}

export interface ImageItemWraperProps {
    visible: boolean;
}

export interface AmenitiesAccordionData {
    header: string;
    content?: string;
    imagePath: string;
}

export default class Amenities extends React.Component<Props, {}> {

    static readonly accordionList: Array<AmenitiesAccordionData> = [
        {
            header: "Entrance",
            imagePath: "/img/carousel/amenities/entrance.jpg"
        },
        {
            header: "Club House",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/clubhouse.jpg"
        },
        {
            header: "Club House Pool",
            imagePath: "/img/carousel/amenities/clubhouse-pool.jpg"
        },
        {
            header: "5-Story Sunset Tower<br />+ 3.000 ft. of trails",
            imagePath: "/img/carousel/amenities/5-story-observation-tower.jpg"
        },
        {
            header: "Fire pits",
            imagePath: "/img/carousel/amenities/fire-pits.jpg"
        },
        {
            header: "Pickeball court",
            imagePath: "/img/carousel/amenities/pickeball-court.jpg"
        },
    ];

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        if (this.props.isMobile) return <AmenitiesMobile onAmenityClickMobile={this.props.onAmenityClickMobile} />;

        return <AmenitiesDesktop />;
    }
}
