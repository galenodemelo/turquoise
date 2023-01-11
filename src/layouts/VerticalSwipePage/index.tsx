import React from "react"
import { Mousewheel, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import styles from "./style.module.sass"

interface Props {
    children: JSX.Element[]
}

export default class VerticalSwipePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
        SwiperConfig.use([Mousewheel])
    }

    render(): JSX.Element {
        return (
            <Swiper
                className={styles.verticalSwipePage}
                direction="vertical"
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
                {this.props.children.map((child: JSX.Element, index: number) => {
                    return (
                        <SwiperSlide key={index} tag="section">
                            {child}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
}
