import { Mousewheel, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

type Props = {
    className: string,
    children: React.ReactNode[]
}

export default function PageSwiper({ className, children }: Props) {
    SwiperConfig.use([
        Mousewheel
    ])

    return (
        <Swiper
            className={className}
            direction="vertical"
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: .1
            }}
            spaceBetween={0}
            slidesPerView={1}
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
