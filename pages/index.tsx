import { BackdropVideo } from "@components/Backdrop/BackdropVideo"
import PageMetadata from "@components/PageMetadata"
import Amenities from "@layouts/Amenities"
import ConceptMap from "@layouts/ConceptMap"
import Contact from "@layouts/Contact"
import CreativeTeam from "@layouts/CreativeTeam"
import Developers from "@layouts/Developers"
import FeelTheNature from "@layouts/FeelTheNature"
import FloatingMenu from "@layouts/FloatingMenu"
import Houses from "@layouts/Houses"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import Location from "@layouts/Location"
import LocationGallery from "@layouts/LocationGallery"
import Masterplan from "@layouts/Masterplan"
import OurGiftForYou from "@layouts/OurGiftForYou"
import ScrollTip from "@layouts/Scroll"
import SurroundedByGreenAndBlue from "@layouts/SurroundedByGreenAndBlue"
import VerticalSwipePage from "@layouts/VerticalSwipePage"
import Image from "next/image"
import React from "react"

interface State {
    menuIsVisible: boolean
    menuWhite: boolean

    scrollTipIsVisible: boolean
    scrollTipWhite: boolean
}

export default class Index extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            menuIsVisible: true,
            menuWhite: true,
            scrollTipIsVisible: true,
            scrollTipWhite: true
        };
    }

    toggleMenuIfNecessary(index: number): void {
        const isPanelWithMenuHidden = [1].includes(index)
        this.setState({ menuIsVisible: !isPanelWithMenuHidden })
    }

    toggleMenuWhiteIfNecessary(index: number): void {
        const isPanelWithWhiteMenu = [0, 5, 6].includes(index)
        this.setState({ menuWhite: isPanelWithWhiteMenu })
    }

    toggleScrollTipIfNecessary(index: number): void {
        const isPanelWithScrollTipHidden = [1].includes(index)
        this.setState({ scrollTipIsVisible: !isPanelWithScrollTipHidden })
    }

    toggleScrollTipWhiteIfNecessary(index: number): void {
        const isPanelWithWhiteScrollTip = [0, 7].includes(index)
        this.setState({ scrollTipWhite: isPanelWithWhiteScrollTip })
    }

    render(): JSX.Element {
        return (
            <>
                <PageMetadata />

                <FloatingMenu visible={this.state.menuIsVisible} white={this.state.menuWhite} />
                <ScrollTip visible={this.state.scrollTipIsVisible} white={this.state.scrollTipWhite} />

                <VerticalSwipePage onStartSliding={(index: number) => {
                    this.toggleMenuIfNecessary(index)
                    this.toggleMenuWhiteIfNecessary(index)

                    this.toggleScrollTipIfNecessary(index)
                    this.toggleScrollTipWhiteIfNecessary(index)
                }}>
                    <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                        <source src="/video/people-on-kayak-intro.webm" type="video/webm" />
                        <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />
                    </BackdropVideo>

                    <IconOfLuxuryAndExclusivity />

                    <Location />

                    <Masterplan />

                    <ConceptMap />
                    <FeelTheNature />
                    <OurGiftForYou />
                    <SurroundedByGreenAndBlue />

                    <Houses />
                    <Amenities />
                    <LocationGallery />
                    <CreativeTeam />
                    <Developers />
                    <Contact />
                </VerticalSwipePage>
            </>
        )
    }
}
