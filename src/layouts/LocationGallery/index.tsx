import Image from "next/image";
import React from "react";
import { ImageCaption, LocationGalleryItem, LocationGalleryWrapper } from "./style";

interface State {
    expandedItemIndex: number | null
}

export default class LocationGallery extends React.Component<{}, State> {

    constructor() {
        super({})
        this.state = {
            expandedItemIndex: null
        }
    }

    render(): JSX.Element {
        const itemList: Array<{ caption: string, imagePath: string, alt: string }> = [
            { caption: "Dunes", imagePath: "/img/location-gallery/dunes.jpg", alt: "View of dunes with a little wood bridge" },
            { caption: "Santa Rosa Beach", imagePath: "/img/location-gallery/santa-rosa-beach.jpg", alt: "Aerial view of Santa Rosa Beach" },
            { caption: "Highway 30A", imagePath: "/img/location-gallery/highway-30a.jpg", alt: "Aerial view of Highway 30A" },
            { caption: "Golf Club", imagePath: "/img/location-gallery/golf-club.jpg", alt: "Aerial view of golf club with some trees aside" },
            { caption: "Fox Lake", imagePath: "/img/location-gallery/fox-lake.jpg", alt: "Aerial view of fox lake" }
        ]

        return (
            <LocationGalleryWrapper>
                {itemList.map((item, index) => {
                    return (
                        <LocationGalleryItem
                            key={index}
                            state={index == this.state.expandedItemIndex ? "expanded" : "collapsed"}
                            onClick={() => this.setState({ expandedItemIndex: this.state.expandedItemIndex === null ? index : null })
                        }>
                            <Image src={item.imagePath} alt={item.alt} layout="fill" objectFit="cover" objectPosition="left top" />
                            <ImageCaption>{item.caption}</ImageCaption>
                        </LocationGalleryItem>
                    )
                })}
            </LocationGalleryWrapper>
        )
    }
}
