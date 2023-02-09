import { SETTINGS } from "@styles/globals"
import React from "react"
import { HashNavigation, Keyboard, Mousewheel, Swiper as SwiperConfig, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import styles from "./style.module.sass"

interface Props {
    children: JSX.Element[]
    onStartSliding?: (activeSlideClassName: DOMTokenList, activeSlideDataHash: string) => void
}

export default class VerticalSwipePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
        SwiperConfig.use([HashNavigation, Keyboard, Mousewheel, Zoom])
    }

    render(): JSX.Element {
        return (
            <Swiper
                className={styles.verticalSwipePage}
                direction="vertical"
                hashNavigation={{ replaceState: true, watchState: true }}
                keyboard={true}
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
                    const activeSlide = swiper.slides[swiper.realIndex]
                    const activeSlideClassName = activeSlide.firstElementChild!.classList
                    this.props.onStartSliding(activeSlideClassName, activeSlide.getAttribute("data-hash") ?? "Home")
                }}
                onSlideChangeTransitionEnd={(swiper: SwiperConfig) => {
                    const activeSlide: any | null = swiper.slides[swiper.activeIndex]
                    if (!activeSlide) return;

                    const hasVerticalScrollbar = activeSlide.scrollHeight > activeSlide.clientHeight;
                    if (hasVerticalScrollbar) {
                        const scrollDifferenceTop = activeSlide.scrollHeight - activeSlide.swiperSlideSize;

                        if (activeSlide.scrollTop === 0) activeSlide.scrollTop += 1;
                        if (activeSlide.scrollTop === scrollDifferenceTop) activeSlide.scrollTop -= 2;
                        swiper.mousewheel.disable();
                        swiper.allowTouchMove = false;

                        activeSlide.addEventListener("scroll", () => {
                            if (activeSlide.scrollTop <= 0 || scrollDifferenceTop - activeSlide.scrollTop <= 1) {
                                swiper.mousewheel.enable();
                                swiper.allowTouchMove = true;
                            }
                        });
                    }
                }}
                zoom={true}
            >
                {this.props.children.map((child: JSX.Element, index: number) => {
                    return (
                        <SwiperSlide key={index} tag="section" style={{ overflow: "auto" }} data-hash={child.type.name}>
                            {child}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
}
