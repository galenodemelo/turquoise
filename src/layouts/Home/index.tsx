import { BackdropVideo } from "@components/Backdrop/BackdropVideo";
import React from "react";
import { HomeWrapper } from "./style";

export default class Home extends React.Component {

    render(): JSX.Element {
        return (
            <HomeWrapper>
                <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                    <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />
                </BackdropVideo>
            </HomeWrapper>
        )
    }
}
