import Image from "next/image";
import React from "react";
import { AttractionWrapper, ImageCaption, LocationGalleryItem } from "./style";

interface State {
    expandedItemIndex: number | null
}

export default class Attraction extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props)
        this.state = {
            expandedItemIndex: null
        }
    }

    render(): JSX.Element {
        const itemList: Array<{ caption: string, imagePath: string, alt: string }> = [
            { caption: "Dunes", imagePath: "/img/carousel/attraction/dunes.jpg", alt: "View of dunes with a little wood bridge" },
            { caption: "Santa Rosa Beach", imagePath: "/img/carousel/attraction/santa-rosa-beach.jpg", alt: "Aerial view of Santa Rosa Beach" },
            { caption: "Highway 30A", imagePath: "/img/carousel/attraction/highway-30a.jpg", alt: "Aerial view of Highway 30A" },
            { caption: "Golf Club", imagePath: "/img/carousel/attraction/golf-club.jpg", alt: "Aerial view of golf club with some trees aside" },
            { caption: "Fox Lake", imagePath: "/img/carousel/attraction/fox-lake.jpg", alt: "Aerial view of fox lake" }
        ]

        return (
            <AttractionWrapper>
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
            </AttractionWrapper>
        )
    }
}
