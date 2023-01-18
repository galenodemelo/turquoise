import React from "react";
import { Accordion, AccordionContent, AccordionHeader, AccordionList, AmenitiesWrapper, Carousel, Details, DetailsFooter, DetailsHeading, ImageItem, ImageWrapper } from "./style";

interface State {
    activeIndex: number;
}

export interface ImageItemWraperProps {
    visible: boolean
}

export default class Amenities extends React.Component<{}, State> {

    accordionList: Array<{ header: string, content: string, imagePath: string }> = [
        {
            header: "Entrance",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/clubhouse.jpg"
        },
        {
            header: "Club House",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/clubhouse.jpg"
        },
        {
            header: "Club House Pool",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/clubhouse-pool.jpg"
        },
        {
            header: "5-Story Observation Tower",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/5-story-observation-tower.jpg"
        },
        {
            header: "+ 3.000 ft. of trails",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/clubhouse.jpg"
        },
        {
            header: "Fire pits",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/fire-pits.jpg"
        },
        {
            header: "Pickeball court",
            content: "Wadding pool, swimming pool, jacuzzi, sun deck, lanai, community room, dry sauna and cold shower, sauna relax deck, bathrooms, workout facility, playroom, exterior yoga terrace, gourmet kitchen and party room.",
            imagePath: "/img/carousel/amenities/pickeball-court.jpg"
        },
    ]

    constructor(props: {}) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    render(): JSX.Element {
        return (
            <AmenitiesWrapper>
                <Carousel>
                    <Details>
                        <DetailsHeading>Amenities</DetailsHeading>

                        <AccordionList>
                            {this.accordionList.map((item, index) => {
                                return (
                                    <Accordion key={index} open={this.state.activeIndex === index}>
                                        <AccordionHeader onClick={(event) => {
                                            event.preventDefault()
                                            this.setState({ activeIndex: index })
                                        }}>
                                            {item.header}
                                        </AccordionHeader>
                                        <AccordionContent>
                                            {item.content}
                                        </AccordionContent>
                                    </Accordion>
                                )
                            })}
                        </AccordionList>
                    </Details>

                    <ImageWrapper>
                        {this.accordionList.map((item, index) => {
                            return (
                                <ImageItem src={item.imagePath} alt={item.header} visible={this.state.activeIndex === index} key={index} />
                            )
                        })}
                    </ImageWrapper>
                </Carousel>

            </AmenitiesWrapper>
        )
    }
}
