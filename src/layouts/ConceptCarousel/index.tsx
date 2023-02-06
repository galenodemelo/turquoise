import Image from "next/image";
import React from "react";
import { Pagination, Swiper as SwiperConfig } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { BulletPaginationItem, BulletPaginationWrapper, ConceptCarouselWrapper } from "./style";

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
                    direction="vertical"
                    pagination={{
                        bulletActiveClass: "active",
                        bulletClass: BulletPaginationItem.styledComponentId,
                        clickable: true,
                        el: `.${BulletPaginationWrapper.styledComponentId}`,
                        type: "bullets"
                    }}
                    style={{ height: "100vh" }}
                >
                    <SwiperSlide>
                        <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/feel-the-nature.jpg" alt="Couple walking along the beach with the title 'Feel the Nature'" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/our-gift-for-you.jpg" alt="Home facade with a parked golf car and the title 'Our gift for you'" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/surrounded-by-green-and-blue.jpg" alt="Father, mother and daughter playing golf at the sundown and the title 'Surrounded by green and blue'" />
                    </SwiperSlide>
                </Swiper>
            </ConceptCarouselWrapper>
        )
    }
}
