import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from "./GallerySwiper.module.sass"
type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function GallerySwiper({ children }: Props): JSX.Element {
    const slideList = Array.isArray(children) ? children : [children]

    return (
        <Swiper
            className={styles.gallerySwiper}
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
