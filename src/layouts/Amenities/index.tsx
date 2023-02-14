import React from "react";
import { Accordion, AccordionContent, AccordionHeader, AccordionList, AmenitiesWrapper, Carousel, Details, DetailsFooter, DetailsHeading, ImageItem, ImageWrapper } from "./style";

interface State {
    activeIndex: number;
}

export interface ImageItemWraperProps {
    visible: boolean
}

export default class Amenities extends React.Component<{}, State> {

    accordionList: Array<{ header: string, content?: string, imagePath: string }> = [
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
                                    <Accordion key={index} open={!!item.content}>
                                        <AccordionHeader
                                            data-state-active={this.state.activeIndex == index}
                                            onClick={(event) => {
                                                event.preventDefault()
                                                this.setState({ activeIndex: index })
                                            }}
                                            dangerouslySetInnerHTML={{__html: item.header}}
                                        />
                                        <AccordionContent>
                                            {item.content}
                                        </AccordionContent>
                                    </Accordion>
                                )
                            })}
                        </AccordionList>

                        <DetailsFooter>
                            <span>No short term rentals</span>
                            <span>Handicapped accessible</span>
                        </DetailsFooter>
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
