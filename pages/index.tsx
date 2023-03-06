import PageMetadata from "@components/PageMetadata";
import AllFloorPlans from "@layouts/AllFloorPlans";
import { AllFloorPlansWrapper } from "@layouts/AllFloorPlans/style";
import Amenities from "@layouts/Amenities";
import AmenitiesCarousel from "@layouts/Amenities/AmenitiesCarousel";
import { AmenitiesWrapper as AmenitiesWrapperDesktop } from "@layouts/Amenities/style-desktop";
import { AmenitiesWrapper as AmenitiesWrapperMobile } from "@layouts/Amenities/style-mobile";
import Attraction from "@layouts/Attraction";
import { AttractionWrapper } from "@layouts/Attraction/style";
import ConceptCarousel from "@layouts/ConceptCarousel";
import { ConceptCarouselWrapper } from "@layouts/ConceptCarousel/style";
import Contact from "@layouts/Contact";
import { ContactWrapper } from "@layouts/Contact/style";
import CreativeTeam from "@layouts/CreativeTeam";
import Developers from "@layouts/Developers";
import FloatingMenu from "@layouts/FloatingMenu";
import Home from "@layouts/Home";
import { HomeWrapper } from "@layouts/Home/style";
import Houses from "@layouts/Houses";
import HousesDetails from "@layouts/Houses/Details";
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity";
import { IconOfLuxuryAndExclusivityWrapper } from "@layouts/IconOfLuxuryAndExclusivity/style";
import Location from "@layouts/Location";
import Masterplan from "@layouts/Masterplan";
import { MasterplanWrapper } from "@layouts/Masterplan/style";
import ScrollTip from "@layouts/Scroll";
import VerticalSwipePage from "@layouts/VerticalSwipePage";
import React from "react";
import VerticalSwipePageContext from "src/libs/VerticalSwipePageContext";
import { StyledComponent } from "styled-components";

interface State {
    menuIsVisible: boolean;
    menuWhite: boolean;

    scrollTipIsVisible: boolean;
    scrollTipWhite: boolean;

    isAmenitiesCarouselActive: boolean;
    isHouseDetailsActive: boolean;
    currentSlideName: string;
}

export default class Index extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            menuIsVisible: true,
            menuWhite: true,
            scrollTipIsVisible: true,
            scrollTipWhite: true,
            isAmenitiesCarouselActive: false,
            isHouseDetailsActive: false,
            currentSlideName: Home.name
        };
    }

    toggleMenuIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideMenu = [IconOfLuxuryAndExclusivityWrapper, AllFloorPlansWrapper];
        const mustHideMenu = this.matchClassWithActiveClassName(componentsToHideMenu, activeSlideClassName);

        this.setState({ menuIsVisible: !mustHideMenu });
    }

    toggleMenuWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToSetMenuWhite = [HomeWrapper, IconOfLuxuryAndExclusivityWrapper, ConceptCarouselWrapper, AttractionWrapper];

        const isPanelWithWhiteMenu = this.matchClassWithActiveClassName(componentsToSetMenuWhite, activeSlideClassName);
        this.setState({ menuWhite: isPanelWithWhiteMenu });
    }

    toggleScrollTipIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentsToHideScrollTip = [IconOfLuxuryAndExclusivityWrapper, MasterplanWrapper, AllFloorPlansWrapper, AmenitiesWrapperDesktop, AmenitiesWrapperMobile, AttractionWrapper, ContactWrapper];

        const isPanelWithScrollTipHidden = this.matchClassWithActiveClassName(componentsToHideScrollTip, activeSlideClassName);
        this.setState({ scrollTipIsVisible: !isPanelWithScrollTipHidden });
    }

    toggleScrollTipWhiteIfNecessary(activeSlideClassName: DOMTokenList): void {
        const componentToSetScrollTipWhite = [HomeWrapper, IconOfLuxuryAndExclusivityWrapper];

        const isPanelWithWhiteScrollTip = this.matchClassWithActiveClassName(componentToSetScrollTipWhite, activeSlideClassName);
        this.setState({ scrollTipWhite: isPanelWithWhiteScrollTip });
    }

    matchClassWithActiveClassName(componentList: StyledComponent<any, any, any>[], activeSlideClassName: DOMTokenList): boolean {
        return componentList.some(component => activeSlideClassName.value.includes(component.styledComponentId));
    }

    render(): JSX.Element {
        return (
            <VerticalSwipePageContext.Provider value={{ slideName: this.state.currentSlideName }}>
                <PageMetadata />

                <FloatingMenu visible={this.state.menuIsVisible} white={this.state.menuWhite} />
                <ScrollTip visible={this.state.scrollTipIsVisible} white={this.state.scrollTipWhite} />

                <VerticalSwipePage
                    onStartSliding={(activeSlideClassName: DOMTokenList, activeSlideName: string) => {
                        this.toggleMenuIfNecessary(activeSlideClassName);
                        this.toggleMenuWhiteIfNecessary(activeSlideClassName);

                        this.toggleScrollTipIfNecessary(activeSlideClassName);
                        this.toggleScrollTipWhiteIfNecessary(activeSlideClassName);

                        this.setState({ currentSlideName: activeSlideName });
                    }}
                >
                    <Home />

                    <IconOfLuxuryAndExclusivity />

                    <Location />

                    <Masterplan />

                    <ConceptCarousel />

                    <Houses onCtaClick={() => this.setState({ isHouseDetailsActive: true })} />
                    <AllFloorPlans />

                    <Amenities onAmenityClickMobile={() => this.setState({ isAmenitiesCarouselActive: true })} />
                    <Attraction />
                    <CreativeTeam />
                    <Developers />
                    <Contact />
                </VerticalSwipePage>

                <HousesDetails isActive={this.state.isHouseDetailsActive} setIsActive={(active: boolean) => this.setState({ isHouseDetailsActive: active })} />
                <AmenitiesCarousel isActive={this.state.isAmenitiesCarouselActive} setIsActive={(active: boolean) => this.setState({ isAmenitiesCarouselActive: active })} />
            </VerticalSwipePageContext.Provider>
        );
    }
}
