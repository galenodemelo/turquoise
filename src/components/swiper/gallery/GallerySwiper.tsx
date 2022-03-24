import { Controller, EffectFade, Navigation, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from "./GallerySwiper.module.sass"

type Props = {
    children: JSX.Element | JSX.Element[]
    controller?: any
    effect?: "slide" | "fade"
    initialSlide?: number
    setSwiperInstance?: (swiper: any) => void
}

export default function GallerySwiper({ initialSlide = 0, children, controller, effect = "slide", setSwiperInstance }: Props): JSX.Element {
    SwiperConfig.use([Controller, Navigation])
    if (effect == "fade") SwiperConfig.use([EffectFade])

    const slideList = Array.isArray(children) ? children : [children]

    return (
        <Swiper
            className={styles.gallerySwiper}
            controller={{ control: controller }}
            effect={effect}
            fadeEffect={{ crossFade: true }}
            initialSlide={initialSlide}
            key={initialSlide}
            loop={true}
            onSwiper={setSwiperInstance}
            navigation={slideList.length > 1}
            spaceBetween={0}
            speed={800}
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
