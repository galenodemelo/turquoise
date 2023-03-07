import { SETTINGS } from "@styles/globals";
import React from "react";
import { Keyboard, Navigation, Swiper as SwiperConfig, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ButtonClose, SlideControlNext, SlideControlPrevious } from "./style";

interface Props {
    children: JSX.Element[];
    closeFunction: () => void;
}

export default class Carousel extends React.Component<Props, {}> {

    controlPrevRef = React.createRef<HTMLButtonElement>();
    controlNextRef = React.createRef<HTMLButtonElement>();

    constructor(props: Props) {
        super(props);
        SwiperConfig.use([Keyboard, Navigation, Zoom]);
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

                <ButtonClose onClick={() => this.props.closeFunction()} />
            </>
        );
    }
}
