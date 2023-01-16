import { BackdropVideo } from "@components/Backdrop/BackdropVideo"
import PageMetadata from "@components/PageMetadata"
import FloatingMenu from "@layouts/FloatingMenu"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import ScrollTip from "@layouts/Scroll"
import VerticalSwipePage from "@layouts/VerticalSwipePage"
import React from "react"

interface State {
    menuIsVisible: boolean

    scrollTipIsVisible: boolean
    scrollTipWhite: boolean
}

export default class Index extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            menuIsVisible: true,
            scrollTipIsVisible: true,
            scrollTipWhite: true
        };
    }

    toggleMenuIfNecessary(index: number): void {
        const isPanelWithMenuHidden = [1].includes(index)
        this.setState({ menuIsVisible: !isPanelWithMenuHidden })
    }

    toggleScrollTipIfNecessary(index: number): void {
        const isPanelWithScrollTipHidden = [1].includes(index)
        this.setState({ scrollTipIsVisible: !isPanelWithScrollTipHidden })
    }

    render(): JSX.Element {
        return (
            <>
                <PageMetadata />

                <FloatingMenu visible={this.state.menuIsVisible} />
                <ScrollTip visible={this.state.menuIsVisible} white={this.state.scrollTipWhite} />

                <VerticalSwipePage onStartSliding={(index: number) => {
                    this.toggleMenuIfNecessary(index)
                    this.toggleScrollTipIfNecessary(index)
                }}>
                    <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                        <source src="/video/people-on-kayak-intro.webm" type="video/webm" />
                        <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />
                    </BackdropVideo>

                    <IconOfLuxuryAndExclusivity />

                    <Image src="/img/location.jpg" layout="fill" objectFit="cover" objectPosition="center center" />
                </VerticalSwipePage>
            </>
        )
    }
}
