import { HashNavigation, Mousewheel, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper.min.css'
import styles from "./PageSwiper.module.sass"

type Props = {
    children: JSX.Element[]
}

export default function PageSwiper({ children }: Props) {
    SwiperConfig.use([
        HashNavigation,
        Mousewheel
    ])

    return (
        <Swiper
            className={styles.pageSwiper}
            direction="vertical"
            hashNavigation={{ watchState: true }}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: .1
            }}
            spaceBetween={0}
            speed={1000}
            slidesPerView={1}
            slidesPerColumn={1}
            tag="main"
        >
            {children.map((child, index) => {
                return (
                    <SwiperSlide tag="section" key={index} data-hash={child.type.name}>
                        {child}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
