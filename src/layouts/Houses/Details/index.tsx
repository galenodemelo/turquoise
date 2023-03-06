import Carousel from "@components/Carousel";
import Popover from "@components/Popover";
import RotatePhone from "@components/RotatePhone";
import React from "react";
import "swiper/swiper.min.css";
import { FloorPlan, HeaderText, ImageContent, ImageContentProps, ImageWrapper, RightHeader, SplittedSlide, TopHeader } from "./style";

interface Props {
    isActive: boolean;
    setIsActive: (active: boolean) => void;
}

export default class HousesDetails extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Popover isActive={this.props.isActive}>
                <Carousel closeFunction={() => this.props.setIsActive(false)}>
                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-1.jpg", alt: "Opal 1 house by Tanney facade" })}

                        <TopHeader>
                            <HeaderText>{`Opal 1 - Tanney's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-opal-1.pdf" />
                    </>

                    <SplittedSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-2.jpg", alt: "Opal 1 house by Tanney pool" })}

                        <RightHeader>
                            <HeaderText>{`Opal 1 - Tanney's design`}</HeaderText>
                        </RightHeader>
                    </SplittedSlide>

                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-1.jpg", alt: "Model house by Russell facade" })}

                        <TopHeader>
                            <HeaderText>{`Amber 1 - Russell's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-amber-1.pdf" />
                    </>

                    <SplittedSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-2.jpg", alt: "Model house by Russell backyard" })}

                        <RightHeader>
                            <HeaderText>{`Amber 1 - Russell's design`}</HeaderText>
                        </RightHeader>
                    </SplittedSlide>

                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-1.jpg", alt: "Model house by Ricardo facade" })}

                        <TopHeader>
                            <HeaderText>{`Malachite 1 - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-malachite-1.pdf" />
                    </>

                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-2.jpg", alt: "Model house by Ricardo pool" })}

                        <TopHeader>
                            <HeaderText>{`Malachite 1 - Ricardo's design`}</HeaderText>
                        </TopHeader>
                    </>

                    <SplittedSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-3.jpg", alt: "Model house's living room by Ricardo" })}

                        <RightHeader>
                            <HeaderText>
                                Living<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </RightHeader>
                    </SplittedSlide>

                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-4.jpg", alt: "Model house's bathroom suite by Ricardo" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite bathroom<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>
                    </>

                    <SplittedSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-5.jpg", alt: "Model house's hall room by Ricardo" })}

                        <RightHeader>
                            <HeaderText>
                                Hall<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </RightHeader>
                    </SplittedSlide>

                    <>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-6.jpg", alt: "Model house's suite by Ricardo", align: "right" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>
                    </>
                </Carousel>

                <RotatePhone forceOrientation="landscape" />
            </Popover>
        );
    }

    private buildZoomableImage(props: ImageContentProps): JSX.Element {
        return (
            <ImageWrapper className="swiper-zoom-container">
                <ImageContent {...props} />
            </ImageWrapper>
        );
    }
}
