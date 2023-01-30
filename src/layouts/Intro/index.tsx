import { BackdropVideo } from "@components/Backdrop/BackdropVideo";
import React from "react";
import { IntroWrapper } from "./style";

export default class Intro extends React.Component {

    render(): JSX.Element {
        return (
            <IntroWrapper>
                <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                    <source src="/video/people-on-kayak-intro.webm" type="video/webm" />
                    <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />
                </BackdropVideo>
            </IntroWrapper>
        )
    }
}
