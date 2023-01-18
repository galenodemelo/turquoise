import React from "react";
interface State {
    activeIndex: number;
}

export default class Amenities extends React.Component<{}, State> {

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
                    </Details>

                    <ImageWrapper>
                    </ImageWrapper>
                </Carousel>

            </AmenitiesWrapper>
        )
    }
}
