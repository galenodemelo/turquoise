import Image from "next/image";
import React from "react";
import { isDesktop } from "react-device-detect";
import { Pagination, Swiper as SwiperConfig } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { BulletPaginationItem, BulletPaginationWrapper, ConceptCarouselWrapper, SlideTitle } from "./style";

export default class ConceptCarousel extends React.Component {

    constructor(props: {}) {
        super(props)
        SwiperConfig.use([Pagination])
    }

    render(): JSX.Element {
        return (
            <ConceptCarouselWrapper>
                <BulletPaginationWrapper />

                <Swiper
                    direction={isDesktop ? "vertical" : "horizontal"}
                    pagination={{
                        bulletActiveClass: "active",
                        bulletClass: BulletPaginationItem.styledComponentId,
                        clickable: true,
                        el: `.${BulletPaginationWrapper.styledComponentId}`,
                        type: "bullets"
                    }}
                    style={{ height: "100vh" }}
                >
                    {isDesktop &&
                        <>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/concept-map.jpg" alt="Conceptual map of Turquoise surroundings" quality={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/feel-the-nature.jpg" alt="Couple walking along the beach with the title 'Feel the Nature'" quality={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/our-gift-for-you.jpg" alt="Home facade with a parked golf car and the title 'Our gift for you'" quality={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/surrounded-by-green-and-blue.jpg" alt="Father, mother and daughter playing golf at the sundown and the title 'Surrounded by green and blue'" quality={100} />
                            </SwiperSlide>
                        </>
                    }

                    {!isDesktop &&
                        <>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/feel-the-nature-mobile.jpg" alt="Couple walking along the beach with the title 'Feel the Nature'" quality={100} />
                                <SlideTitle color="green">Feel the nature</SlideTitle>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/our-gift-for-you-mobile.jpg" alt="Home facade with a parked golf car and the title 'Our gift for you'" quality={100} />
                                <SlideTitle color="white">Our gift for you</SlideTitle>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/surrounded-by-green-and-blue-mobile.jpg" alt="Father, mother and daughter playing golf at the sundown and the title 'Surrounded by green and blue'" quality={100} />
                                <SlideTitle color="white">Surrounded by green and blue</SlideTitle>
                            </SwiperSlide>
                        </>
                    }
                </Swiper>
            </ConceptCarouselWrapper>
        )
    }
}
