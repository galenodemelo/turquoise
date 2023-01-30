import { SETTINGS } from "@styles/globals";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ButtonClose, FloorPlan, HeaderText, HousesDetailsWrapper, RightHeader, SplittedSlide, TopHeader } from "./style";

interface Props {
    isActive: boolean
    setIsActive: (active: boolean) => void
}

export default class HousesDetails extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <HousesDetailsWrapper data-state-active={this.props.isActive}>
                <Swiper
                    simulateTouch={true}
                    slidesPerView={1}
                    slidesPerColumn={1}
                    spaceBetween={0}
                    speed={SETTINGS.swiper.speedInMilliseconds}
                    style={{ height: "100vh", width: "100%" }}
                >
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/tanneys-design-1.jpg" layout="fill" alt="Model house by Tanney facade" />

                        <TopHeader>
                            <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/tanneys-design-2.jpg" layout="fill" alt="Model house by Tanney pool" objectFit="cover" />
                            </div>
                            <RightHeader>
                                <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/russells-design-1.jpg" layout="fill" alt="Model house by Russell facade" />

                        <TopHeader>
                            <HeaderText>{`Model House - Russell's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/russells-design-2.jpg" layout="fill" alt="Model house by Russell backyard" objectFit="cover" />
                            </div>
                            <RightHeader>
                                <HeaderText>{`Model House - Russell's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-1.jpg" layout="fill" alt="Model house by Ricardo facade" />

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-2.jpg" layout="fill" alt="Model house by Ricardo pool" />

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/ricardos-design-3.jpg" layout="fill" alt="Model house's living room by Ricardo" objectFit="cover" />
                            </div>
                            <RightHeader>
                                <HeaderText>
                                    Living<br />
                                    {`Model House - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-4.jpg" layout="fill" alt="Model house's bathroom suite by Ricardo" />

                        <TopHeader>
                            <HeaderText>
                                Master ensuite bathroom<br />
                                {`Model House - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/ricardos-design-5.jpg" layout="fill" alt="Model house's hall room by Ricardo" objectFit="cover" />
                            </div>
                            <RightHeader>
                                <HeaderText>
                                    Hall<br />
                                    {`Model House - Ricardo's design`}
                                </HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-6.jpg" layout="fill" alt="Model house's suite by Ricardo" />

                        <TopHeader>
                            <HeaderText>
                                Master ensuite<br />
                                {`Model House - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>

                        <FloorPlan />
                    </SwiperSlide>
                </Swiper>

                <ButtonClose onClick={() => this.props.setIsActive(false)} />
            </HousesDetailsWrapper>
        )
    }
}
