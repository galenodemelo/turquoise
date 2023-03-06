import React from "react";
import Amenities, { AmenitiesAccordionData } from "./index";
import { Accordion, AccordionContent, AccordionHeader, AccordionList, AmenitiesWrapper, Carousel, Details, DetailsFooter, DetailsHeading, ImageItem, ImageWrapper } from "./style-desktop";

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
                <Carousel>
                    <Details>
                        <DetailsHeading>Amenities</DetailsHeading>

                        <AccordionList>
                            {Amenities.accordionList.map((item, index) => {
                                return (
                                    <Accordion key={index} open={!!item.content}>
                                        <AccordionHeader
                                            data-state-active={this.state.activeIndex == index}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                this.setState({ activeIndex: index });
                                            }}
                                            dangerouslySetInnerHTML={{ __html: item.header }}
                                        />
                                        <AccordionContent>
                                            {item.content}
                                        </AccordionContent>
                                    </Accordion>
                                );
                            })}
                        </AccordionList>

                        <DetailsFooter>
                            <span>No short term rentals</span>
                            <span>Handicapped accessible</span>
                        </DetailsFooter>
                    </Details>

                    <ImageWrapper>
                        {Amenities.accordionList.map((item, index) => {
                            return (
                                <ImageItem src={item.imagePath} alt={item.header} visible={this.state.activeIndex === index} key={index} />
                            );
                        })}
                    </ImageWrapper>
                </Carousel>
            </AmenitiesWrapper>
        );
    }
}
