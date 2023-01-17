import { SETTINGS } from "@styles/globals"
import React from "react"
import { Mousewheel, Swiper as SwiperConfig } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import styles from "./style.module.sass"

interface Props {
    children: JSX.Element[]
    onStartSliding?: (index: number) => void
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
                simulateTouch={false}
                spaceBetween={0}
                speed={SETTINGS.swiper.speedInMilliseconds}
                slidesPerView={1}
                slidesPerColumn={1}
                tag="main"
                onSlideChangeTransitionStart={(swiper) => {
                    if (!this.props.onStartSliding) return;
                    this.props.onStartSliding(swiper.realIndex)
                }}
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
