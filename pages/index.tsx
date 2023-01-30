import PageMetadata from "@components/PageMetadata"
import Amenities from "@layouts/Amenities"
import { AmenitiesWrapper } from "@layouts/Amenities/style"
import Attraction from "@layouts/Attraction"
import { AttractionWrapper } from "@layouts/Attraction/style"
import ConceptMap from "@layouts/ConceptMap"
import Contact from "@layouts/Contact"
import { ContactWrapper } from "@layouts/Contact/style"
import CreativeTeam from "@layouts/CreativeTeam"
import Developers from "@layouts/Developers"
import FeelTheNature from "@layouts/FeelTheNature"
import { FellTheNatureWrapper } from "@layouts/FeelTheNature/style"
import FloatingMenu from "@layouts/FloatingMenu"
import Home from "@layouts/Home"
import { HomeWrapper } from "@layouts/Home/style"
import Houses from "@layouts/Houses"
import HousesDetails from "@layouts/Houses/Details"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import { IconOfLuxuryAndExclusivityWrapper } from "@layouts/IconOfLuxuryAndExclusivity/style"
import Location from "@layouts/Location"
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

    isHouseDetailsActive: boolean
}

export default class Index extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            menuIsVisible: true,
            menuWhite: true,
            scrollTipIsVisible: true,
            scrollTipWhite: true,
            isHouseDetailsActive: false
        };
    }

    toggleMenuIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideMenu = [IconOfLuxuryAndExclusivityWrapper]
        const mustHideMenu = this.matchClassWithActiveClassName(componentsToHideMenu, activeSlideClassName)

        this.setState({ menuIsVisible: !mustHideMenu })
    }

    toggleMenuWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToSetMenuWhite = [HomeWrapper, IconOfLuxuryAndExclusivityWrapper, FellTheNatureWrapper, OurGiftForYouWrapper, AttractionWrapper]

        const isPanelWithWhiteMenu = this.matchClassWithActiveClassName(componentsToSetMenuWhite, activeSlideClassName)
        this.setState({ menuWhite: isPanelWithWhiteMenu })
    }

    toggleScrollTipIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideScrollTip = [IconOfLuxuryAndExclusivityWrapper, MasterplanWrapper, AmenitiesWrapper, AttractionWrapper, ContactWrapper]

        const isPanelWithScrollTipHidden = this.matchClassWithActiveClassName(componentsToHideScrollTip, activeSlideClassName)
        this.setState({ scrollTipIsVisible: !isPanelWithScrollTipHidden })
    }

    toggleScrollTipWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentToSetScrollTipWhite = [HomeWrapper, IconOfLuxuryAndExclusivityWrapper, SurroundedByGreenAndBlueWrapper]

        const isPanelWithWhiteScrollTip = this.matchClassWithActiveClassName(componentToSetScrollTipWhite, activeSlideClassName)
        this.setState({ scrollTipWhite: isPanelWithWhiteScrollTip })
    }

    matchClassWithActiveClassName(componentList: StyledComponent<any, any, any>[], activeSlideClassName: DOMTokenList): boolean {
        return componentList.some(component => activeSlideClassName.value.includes(component.styledComponentId))
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
                    <Home />

                    <IconOfLuxuryAndExclusivity />

                    <Location />

                    <Masterplan />

                    <ConceptMap />
                    <FeelTheNature />
                    <OurGiftForYou />
                    <SurroundedByGreenAndBlue />

                    <Houses onCtaClick={() => this.setState({ isHouseDetailsActive: true })} />
                    <Amenities />
                    <Attraction />
                    <CreativeTeam />
                    <Developers />
                    <Contact />
                </VerticalSwipePage>

                <HousesDetails isActive={this.state.isHouseDetailsActive} setIsActive={(active: boolean) => this.setState({ isHouseDetailsActive: active })} />
            </>
        )
    }
}
