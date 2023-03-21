import { BackdropVideo } from "@components/Backdrop/BackdropVideo";
import React from "react";
import { HomeWrapper } from "./style";

interface State {
    isBigScreen?: boolean;
}

export default class Home extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const isBigScreen = window.innerWidth > 1660;
        this.setState({ isBigScreen: isBigScreen });
    }

    render(): JSX.Element {
        return (
            <HomeWrapper>
                <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                    {this.state.isBigScreen === true &&
                        <source src="/video/people-on-kayak-intro.1920.mp4" type="video/mp4" media="all and (min-width: 1659px)" />
                    }

                    {this.state.isBigScreen === false &&
                        <source src="/video/people-on-kayak-intro.1660.mp4" type="video/mp4" media="all and (max-width: 1660px)" />
                    }
                </BackdropVideo>
            </HomeWrapper>
        );
    }
}
