import { SETTINGS } from "@styles/globals";
import Image from "next/image";
import React from "react";
import { Keyboard, Navigation, Swiper as SwiperConfig } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ButtonClose, FloorPlan, HeaderText, HousesDetailsWrapper, RightHeader, SlideControlNext, SlideControlPrevious, SplittedSlide, TopHeader } from "./style";

interface Props {
    isActive: boolean
    setIsActive: (active: boolean) => void
}

export default class HousesDetails extends React.Component<Props, {}> {

    controlPrevRef = React.createRef<HTMLButtonElement>()
    controlNextRef = React.createRef<HTMLButtonElement>()

    constructor(props: Props) {
        super(props)
        SwiperConfig.use([Keyboard, Navigation])
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
                >
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/tanneys-design-1.jpg" layout="fill" alt="Model house by Tanney facade" priority={true} />

                        <TopHeader>
                            <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/7bgchy35w5coldr/MARK%20-%20TURQUOISE_MODEL3200A_4-26-22.pdf?dl=0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/tanneys-design-2.jpg" layout="fill" alt="Model house by Tanney pool" objectFit="cover" priority={true} />
                            </div>
                            <RightHeader>
                                <HeaderText>{`Model House - Tanney's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/russells-design-1.jpg" layout="fill" alt="Model house by Russell facade" priority={true} />

                        <TopHeader>
                            <HeaderText>{`Model House - Russell's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/lhxujuhqae3fsf6/RUSSELL%20-%20PROTOTYPE%201%204%20BED%20TOWER%2005.17.22.pdf?dl=0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/russells-design-2.jpg" layout="fill" alt="Model house by Russell backyard" objectFit="cover" priority={true} />
                            </div>
                            <RightHeader>
                                <HeaderText>{`Model House - Russell's design`}</HeaderText>
                            </RightHeader>
                        </SplittedSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-1.jpg" layout="fill" alt="Model house by Ricardo facade" priority={true} />

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/twd1uidxqlqx1ke/RICARDO%20-%2001%20MODEL%2001%20OPTION%2001-2.pdf?dl=0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/carousel/houses/ricardos-design-2.jpg" layout="fill" alt="Model house by Ricardo pool" priority={true} />

                        <TopHeader>
                            <HeaderText>{`Model House - Ricardo's design`}</HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/twd1uidxqlqx1ke/RICARDO%20-%2001%20MODEL%2001%20OPTION%2001-2.pdf?dl=0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/ricardos-design-3.jpg" layout="fill" alt="Model house's living room by Ricardo" objectFit="cover" priority={true} />
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
                        <Image src="/img/carousel/houses/ricardos-design-4.jpg" layout="fill" alt="Model house's bathroom suite by Ricardo" priority={true} />

                        <TopHeader>
                            <HeaderText>
                                Master ensuite bathroom<br />
                                {`Model House - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/twd1uidxqlqx1ke/RICARDO%20-%2001%20MODEL%2001%20OPTION%2001-2.pdf?dl=0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SplittedSlide>
                            <div>
                                <Image src="/img/carousel/houses/ricardos-design-5.jpg" layout="fill" alt="Model house's hall room by Ricardo" objectFit="cover" priority={true} />
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
                        <Image src="/img/carousel/houses/ricardos-design-6.jpg" layout="fill" alt="Model house's suite by Ricardo" priority={true} />

                        <TopHeader>
                            <HeaderText>
                                Master ensuite<br />
                                {`Model House - Ricardo's design`}
                            </HeaderText>
                        </TopHeader>

                        <FloorPlan href="https://www.dropbox.com/s/twd1uidxqlqx1ke/RICARDO%20-%2001%20MODEL%2001%20OPTION%2001-2.pdf?dl=0" />
                    </SwiperSlide>
                </Swiper>

                <SlideControlPrevious ref={this.controlPrevRef} />
                <SlideControlNext ref={this.controlNextRef} />

                <ButtonClose onClick={() => this.props.setIsActive(false)} />
            </HousesDetailsWrapper>
        )
    }
}
