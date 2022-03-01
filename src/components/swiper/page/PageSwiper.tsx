import { Mousewheel, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper.min.css'
import styles from "./PageSwiper.module.sass"

type Props = {
    children: React.ReactNode[]
}

export default function PageSwiper({ children }: Props) {
    SwiperConfig.use([
        Mousewheel
    ])

    return (
        <Swiper
            className={styles.pageSwiper}
            direction="vertical"
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: .1
            }}
            spaceBetween={0}
            speed={800}
            slidesPerView={1}
            slidesPerColumn={1}
            tag="main"
        >
            {children.map((child, index) => {
                return (
                    <SwiperSlide tag="section" key={index}>
                        {child}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
