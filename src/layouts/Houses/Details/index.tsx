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
                        {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-1.jpg", alt: "Model house by Tanney facade" })}

                        <TopHeader>
                            <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/7bgchy35w5coldr/MARK%20-%20TURQUOISE_MODEL3200A_4-26-22.pdf?dl=0" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/tanneys-design-2.jpg", alt: "Model house by Tanney pool" })}

                            <RightHeader>
                                <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-1.jpg", alt: "Model house by Russell facade" })}

                        <TopHeader>
                            <HeaderText>{`Model House - Russell's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/lhxujuhqae3fsf6/RUSSELL%20-%20PROTOTYPE%201%204%20BED%20TOWER%2005.17.22.pdf?dl=0" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/russells-design-2.jpg", alt: "Model house by Russell backyard" })}

                            <RightHeader>
                                <HeaderText>{`Model House - Russell's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-1.jpg", alt: "Model house by Ricardo facade" })}

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/twd1uidxqlqx1ke/RICARDO%20-%2001%20MODEL%2001%20OPTION%2001-2.pdf?dl=0" />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-2.jpg", alt: "Model house by Ricardo pool" })}

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-3.jpg", alt: "Model house's living room by Ricardo" })}

                            <RightHeader>
                                <HeaderText>
                                    Living<br />
                                    {`Model House - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-4.jpg", alt: "Model house's bathroom suite by Ricardo" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite bathroom<br />
                                {`Model House - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SplittedSlide>
                            {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-5.jpg", alt: "Model house's hall room by Ricardo" })}

                            <RightHeader>
                                <HeaderText>
                                    Hall<br />
                                    {`Model House - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.buildZoomableImage({ src: "/img/carousel/houses/ricardos-design-6.jpg", alt: "Model house's suite by Ricardo", align: "right" })}

                        <TopHeader>
                            <HeaderText>
                                Master ensuite<br />
                                {`Model House - Ricardo's design`}
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
