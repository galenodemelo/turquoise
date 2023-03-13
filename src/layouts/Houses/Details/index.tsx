import Carousel from "@components/Carousel";
import Popover from "@components/Popover";
import React from "react";
import { Swiper as SwiperConfig } from "swiper"
import { FloorPlan, HeaderText, ImageContent, ImageContentProps, ImageWrapper, RightHeader, SplittedSlide, TopHeader } from "./style";

export type Designer = "tanney" | "russell" | "ricardo";

interface Props {
    isActive: boolean;
    setIsActive: (active: boolean) => void;
    isMobile: boolean;
    designer?: Designer;
}

export default class HousesDetails extends React.Component<Props, {}> {

    swiperInstance?: SwiperConfig;

    constructor(props: Props) {
        super(props);
    }

    close() {
        this.props.setIsActive(false);
        setTimeout(() => this.swiperInstance?.slideTo(0), 2000);
    }

    render(): JSX.Element {
        const isMobile: boolean = this.props.isMobile;
        const mustShowTanney = !isMobile || this.props.designer == "tanney";
        const mustShowRussell = !isMobile || this.props.designer == "russell";
        const mustShowRicardo = !isMobile || this.props.designer == "ricardo";

        return (
            <Popover isActive={this.props.isActive} closeFunction={() => this.close()}>
                <Carousel getSwiperInstance={(swiper: SwiperConfig) => this.swiperInstance = swiper}>
                    {mustShowTanney &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-1.jpg", alt: "Opal 1 house by Tanney facade" })}

                            <TopHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Opal 1 - Tanney's design`
                                        : "Facade"
                                    }
                                </HeaderText>
                            </TopHeader>

                            <FloorPlan href="/docs/floor-plan-opal-1.pdf" />
                        </>
                    }

                    {mustShowTanney &&
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-2.jpg", alt: "Opal 1 house by Tanney backyard" })}

                            <RightHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Opal 1 - Tanney's design`
                                        : "Backyard"
                                    }
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    }

                    {mustShowRussell &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-1.jpg", alt: "Amber 1 1 house by Russell facade" })}

                            <TopHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Amber 1 - Russell's design`
                                        : "Facade"
                                    }
                                </HeaderText>
                            </TopHeader>

                            <FloorPlan href="/docs/floor-plan-amber-1.pdf" />
                        </>
                    }

                    {mustShowRussell &&
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-2.jpg", alt: "Amber 1 house by Tanney backyard" })}

                            <RightHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Amber 1 - Russell's design`
                                        : "Backyard"
                                    }
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>

                    }

                    {mustShowRicardo &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-1.jpg", alt: "Model house by Ricardo facade" })}

                            <TopHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Malachite 1 - Ricardo's design`
                                        : "Facade"
                                    }
                                </HeaderText>
                            </TopHeader>

                            <FloorPlan href="/docs/floor-plan-malachite-1.pdf" />
                        </>
                    }

                    {mustShowRicardo &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-2.jpg", alt: "Model house by Ricardo backyard" })}

                            <TopHeader>
                                <HeaderText>
                                    {!isMobile
                                        ? `Malachite 1 - Ricardo's design`
                                        : "Backyard"
                                    }
                                </HeaderText>
                            </TopHeader>
                        </>
                    }

                    {mustShowRicardo &&
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-3.jpg", alt: "Model house's living room by Ricardo" })}

                            <RightHeader>
                                <HeaderText dangerouslySetInnerHTML={{
                                    __html: !isMobile
                                        ? "Living<br />Malachite 1 - Ricardo's design"
                                        : "Living"
                                }} />
                            </RightHeader>
                        </SplittedSlide>
                    }

                    {mustShowRicardo &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-4.jpg", alt: "Model house's bathroom suite by Ricardo" })}

                            <TopHeader>
                                <HeaderText dangerouslySetInnerHTML={{
                                    __html: !isMobile
                                        ? "Master ensuite bathroom<br />Malachite 1 - Ricardo's design"
                                        : "Master ensuite bathroom"
                                }} />
                            </TopHeader>
                        </>
                    }

                    {mustShowRicardo &&
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-5.jpg", alt: "Model house's hall room by Ricardo" })}

                            <RightHeader>
                                <HeaderText dangerouslySetInnerHTML={{
                                    __html: !isMobile
                                        ? "Hall<br />Malachite 1 - Ricardo's design"
                                        : "Hall"
                                }} />
                            </RightHeader>
                        </SplittedSlide>
                    }

                    {mustShowRicardo &&
                        <>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-6.jpg", alt: "Model house's suite by Ricardo", align: "right" })}

                            <TopHeader>
                                <HeaderText dangerouslySetInnerHTML={{
                                    __html: !isMobile
                                        ? "Master ensuite<br />Malachite 1 - Ricardo's design"
                                        : "Master ensuite"
                                }} />
                            </TopHeader>
                        </>
                    }
                </Carousel>
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
