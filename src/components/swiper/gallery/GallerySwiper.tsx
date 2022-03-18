import { Controller, Navigation, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from "./GallerySwiper.module.sass"

type Props = {
    children: JSX.Element | JSX.Element[]
    controller?: any
    setSwiperInstance?: (swiper: any) => void
}

export default function GallerySwiper({ children, controller, setSwiperInstance }: Props): JSX.Element {
    SwiperConfig.use([Controller, Navigation])

    const slideList = Array.isArray(children) ? children : [children]

    return (
        <Swiper
            className={styles.gallerySwiper}
            controller={{ control: controller }}
            onSwiper={setSwiperInstance}
            navigation={slideList.length > 1}
            spaceBetween={0}
            speed={600}
            slidesPerView={1}
            slidesPerColumn={1}
        >
            {slideList.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        {slide}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
