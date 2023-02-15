import { SETTINGS } from "@styles/globals";
import React from "react";
import { Keyboard, Navigation, Swiper as SwiperConfig, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ButtonClose, FloorPlan, HeaderText, HousesDetailsWrapper, ImageContent, ImageContentProps, ImageWrapper, RightHeader, SlideControlNext, SlideControlPrevious, SplittedSlide, TopHeader } from "./style";

interface Props {
    isActive: boolean
    setIsActive: (active: boolean) => void
}

export default class HousesDetails extends React.Component<Props, {}> {

    controlPrevRef = React.createRef<HTMLButtonElement>()
    controlNextRef = React.createRef<HTMLButtonElement>()

    constructor(props: Props) {
        super(props)
        SwiperConfig.use([Keyboard, Navigation, Zoom])
    }

    render(): JSX.Element {
        return (
            <HousesDetailsWrapper data-state-active={this.props.isActive}>
                <Swiper
                    keyboard={true}
                    navigation={{
                        prevEl: this.controlPrevRef.current,
                        nextEl: this.controlNextRef.current
                    }}
                    simulateTouch={false}
                    slidesPerView={1}
                    slidesPerColumn={1}
                    spaceBetween={0}
                    speed={SETTINGS.swiper.speedInMilliseconds}
                    style={{ height: "100vh", width: "100%" }}
                    zoom={true}
                >
                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-1.jpg", alt: "Opal 1 house by Tanney facade" })}

                        <TopHeader>
                            <HeaderText>{`Opal 1 - Tanney's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-opal-1.pdf" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-2.jpg", alt: "Opal 1 house by Tanney pool" })}

                            <RightHeader>
                                <HeaderText>{`Opal 1 - Tanney's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-1.jpg", alt: "Model house by Russell facade" })}

                        <TopHeader>
                            <HeaderText>{`Amber 1 - Russell's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-amber-1.pdf" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-2.jpg", alt: "Model house by Russell backyard" })}

                            <RightHeader>
                                <HeaderText>{`Amber 1 - Russell's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-1.jpg", alt: "Model house by Ricardo facade" })}

                        <TopHeader>
                            <HeaderText>{`Malachite 1 - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="/docs/floor-plan-malachite-1.pdf" />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-2.jpg", alt: "Model house by Ricardo pool" })}

                        <TopHeader>
                            <HeaderText>{`Malachite 1 - Ricardo's design`}</HeaderText>
                        </TopHeader>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-3.jpg", alt: "Model house's living room by Ricardo" })}

                            <RightHeader>
                                <HeaderText>
                                    Living<br />
                                    {`Malachite 1 - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-4.jpg", alt: "Model house's bathroom suite by Ricardo" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite bathroom<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-5.jpg", alt: "Model house's hall room by Ricardo" })}

                            <RightHeader>
                                <HeaderText>
                                    Hall<br />
                                    {`Malachite 1 - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-6.jpg", alt: "Model house's suite by Ricardo", align: "right" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite<br />
                                {`Malachite 1 - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>
                    </SwiperSlide>
                </Swiper>

                <SlideControlPrevious ref={this.controlPrevRef} />
                <SlideControlNext ref={this.controlNextRef} />

                <ButtonClose onClick={() => this.props.setIsActive(false)} />
            </HousesDetailsWrapper>
        )
    }

    private buildZoomableImage(props: ImageContentProps): JSX.Element {
        return (
            <ImageWrapper className="swiper-zoom-container">
                <ImageContent {...props} />
            </ImageWrapper>
        )
    }
}
