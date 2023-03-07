import { SETTINGS } from "@styles/globals";
import React from "react";
import { Keyboard, Navigation, Swiper as SwiperConfig, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ButtonClose, SlideControlNext, SlideControlPrevious } from "./style";

interface Props {
    children: Array<any>;
    closeFunction: () => void;
    getSwiperInstance?: (swiper: SwiperConfig) => void;
}

interface State {
    swiperInstance?: SwiperConfig;
}

export default class Carousel extends React.Component<Props, State> {

    controlPrevRef = React.createRef<HTMLButtonElement>();
    controlNextRef = React.createRef<HTMLButtonElement>();

    constructor(props: Props) {
        super(props);
        SwiperConfig.use([Keyboard, Navigation, Zoom]);
    }

    close() {
        this.props.closeFunction();
        setTimeout(() => this.state.swiperInstance?.slideTo(0), 2000);
    }

    render(): JSX.Element {
        return (
            <>
                <Swiper
                    keyboard={true}
                    navigation={{
                        prevEl: this.controlPrevRef.current,
                        nextEl: this.controlNextRef.current
                    }}
                    onSwiper={(swiper: SwiperConfig) => {
                        this.setState({ swiperInstance: swiper });
                        if (this.props.getSwiperInstance) this.props.getSwiperInstance(swiper);
                    }}
                    simulateTouch={false}
                    slidesPerView={1}
                    slidesPerColumn={1}
                    spaceBetween={0}
                    speed={SETTINGS.swiper.speedInMilliseconds}
                    style={{ height: "100vh", width: "100%" }}
                    zoom={true}
                >
                    {this.props.children.map((child: JSX.Element, index: number) => {
                        if (!child) return;

                        return (
                            <SwiperSlide key={index}>
                                {child}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>


                <SlideControlPrevious ref={this.controlPrevRef} />
                <SlideControlNext ref={this.controlNextRef} />

                <ButtonClose onClick={() => this.close()} />
            </>
        );
    }
}
