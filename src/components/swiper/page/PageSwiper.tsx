import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

type Props = {
    className: string,
    children: React.ReactNode[]
}

export default function PageSwiper({ className, children }: Props) {
    return (
        <Swiper
            className={className}
            direction="vertical"
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
