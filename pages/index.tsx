import { BackdropVideo } from "@components/Backdrop/BackdropVideo"
import PageMetadata from "@components/PageMetadata"
import Amenities from "@layouts/Amenities"
import Contact from "@layouts/Contact"
import CreativeTeam from "@layouts/CreativeTeam"
import Developers from "@layouts/Developers"
import FloatingMenu from "@layouts/FloatingMenu"
import Houses from "@layouts/Houses"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import Location from "@layouts/Location"
import LocationGallery from "@layouts/LocationGallery"
import Masterplan from "@layouts/Masterplan"
import ScrollTip from "@layouts/Scroll"
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
                <ScrollTip visible={this.state.menuIsVisible} white={this.state.scrollTipWhite} />

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

                    <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/concept-map.jpg" />
                    <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/feel-the-nature.jpg" alt="Couple walking along the beach with the title 'Feel the Nature'" />
                    <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/our-gift-for-you.jpg" alt="Home facade with a parked golf car and the title 'Our gift for you'" />
                    <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/surrounded-by-green-and-blue.jpg" alt="Father, mother and daughter playing golf at the sundown and the title 'Surrounded by green and blue'" />

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
