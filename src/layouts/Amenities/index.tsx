import React from "react";
import AmenitiesDesktop from "./desktop";
import AmenitiesMobile, { Props as AmenitiesMobileProps } from "./mobile";

export type Amenity = "entrance" | "club-house" | "club-house-pool" | "sunset-tower" | "fire-pits" | "pickeball-court"

interface Props extends AmenitiesMobileProps {
    isMobile: boolean;
}

export interface ImageItemWraperProps {
    visible: boolean;
}

export interface AmenitiesAccordionData {
    amenity: Amenity
    header: string;
    imagePath: string;
}

export default class Amenities extends React.Component<Props, {}> {

    static readonly accordionList: Array<AmenitiesAccordionData> = [
        {
            amenity: "entrance",
            header: "Entrance",
            imagePath: "/img/carousel/amenities/entrance.jpg"
        },
        {
            amenity: "club-house",
            header: "Club House",
            imagePath: "/img/carousel/amenities/clubhouse.jpg"
        },
        {
            amenity: "club-house-pool",
            header: "Club House Pool",
            imagePath: "/img/carousel/amenities/clubhouse-pool.jpg"
        },
        {
            amenity: "sunset-tower",
            header: "5-Story Sunset Tower<br />+ 3.000 ft. of trails",
            imagePath: "/img/carousel/amenities/5-story-observation-tower.jpg"
        },
        {
            amenity: "fire-pits",
            header: "Fire pits",
            imagePath: "/img/carousel/amenities/fire-pits.jpg"
        },
        {
            amenity: "pickeball-court",
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
