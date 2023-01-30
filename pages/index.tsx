import { BackdropVideo } from "@components/Backdrop/BackdropVideo"
import PageMetadata from "@components/PageMetadata"
import Amenities from "@layouts/Amenities"
import ConceptMap from "@layouts/ConceptMap"
import Contact from "@layouts/Contact"
import CreativeTeam from "@layouts/CreativeTeam"
import Developers from "@layouts/Developers"
import FeelTheNature from "@layouts/FeelTheNature"
import { FellTheNatureWrapper } from "@layouts/FeelTheNature/style"
import FloatingMenu from "@layouts/FloatingMenu"
import Houses from "@layouts/Houses"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import { IconOfLuxuryAndExclusivityWrapper } from "@layouts/IconOfLuxuryAndExclusivity/style"
import Location from "@layouts/Location"
import LocationGallery from "@layouts/LocationGallery"
import Masterplan from "@layouts/Masterplan"
import { MasterplanWrapper } from "@layouts/Masterplan/style"
import OurGiftForYou from "@layouts/OurGiftForYou"
import { OurGiftForYouWrapper } from "@layouts/OurGiftForYou/style"
import ScrollTip from "@layouts/Scroll"
import SurroundedByGreenAndBlue from "@layouts/SurroundedByGreenAndBlue"
import { SurroundedByGreenAndBlueWrapper } from "@layouts/SurroundedByGreenAndBlue/style"
import VerticalSwipePage from "@layouts/VerticalSwipePage"
import React from "react"
import { StyledComponent } from "styled-components"

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

    toggleMenuIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideMenu = [IconOfLuxuryAndExclusivityWrapper]
        const mustHideMenu = this.matchClassWithActiveClassName(componentsToHideMenu, activeSlideClassName)

        this.setState({ menuIsVisible: !mustHideMenu })
    }

    toggleMenuWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToSetMenuWhite = [IconOfLuxuryAndExclusivityWrapper, FellTheNatureWrapper, OurGiftForYouWrapper]

        const isPanelWithWhiteMenu = this.matchClassWithActiveClassName(componentsToSetMenuWhite, activeSlideClassName)
        this.setState({ menuWhite: isPanelWithWhiteMenu })
    }

    toggleScrollTipIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideScrollTip = [IconOfLuxuryAndExclusivityWrapper, MasterplanWrapper]

        const isPanelWithScrollTipHidden = this.matchClassWithActiveClassName(componentsToHideScrollTip, activeSlideClassName)
        this.setState({ scrollTipIsVisible: !isPanelWithScrollTipHidden })
    }

    toggleScrollTipWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentToSetScrollTipWhite = [IconOfLuxuryAndExclusivityWrapper, SurroundedByGreenAndBlueWrapper]

        const isPanelWithWhiteScrollTip = this.matchClassWithActiveClassName(componentToSetScrollTipWhite, activeSlideClassName)
        this.setState({ scrollTipWhite: isPanelWithWhiteScrollTip })
    }

    matchClassWithActiveClassName(componentList: StyledComponent<any, any, any>[], activeSlideClassName: DOMTokenList): boolean {
        return componentList.some(component => {
            const valueToBeReturned = activeSlideClassName.value.includes(component.styledComponentId)
            console.log(activeSlideClassName.value, "|", component.styledComponentId, "|", valueToBeReturned)
            return valueToBeReturned
        })
    }

    render(): JSX.Element {
        return (
            <>
                <PageMetadata />

                <FloatingMenu visible={this.state.menuIsVisible} white={this.state.menuWhite} />
                <ScrollTip visible={this.state.scrollTipIsVisible} white={this.state.scrollTipWhite} />

                <VerticalSwipePage onStartSliding={(activeSlideClassName: DOMTokenList) => {
                    this.toggleMenuIfNecessary(activeSlideClassName)
                    this.toggleMenuWhiteIfNecessary(activeSlideClassName)

                    this.toggleScrollTipIfNecessary(activeSlideClassName)
                    this.toggleScrollTipWhiteIfNecessary(activeSlideClassName)
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
