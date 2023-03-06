import PageMetadata from "@components/PageMetadata";
import RotatePhone, { Orientation } from "@components/RotatePhone";
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
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React from "react";
import VerticalSwipePageContext from "src/libs/VerticalSwipePageContext";
import { StyledComponent } from "styled-components";

interface Props {
    isMobile: boolean;
}

interface State {
    menuIsVisible: boolean;
    menuWhite: boolean;

    scrollTipIsVisible: boolean;
    scrollTipWhite: boolean;

    isAmenitiesCarouselActive: boolean;
    isHouseDetailsActive: boolean;

    rotatePhoneOrientation: Orientation | null;
    currentSlideName: string;
}

export default class Index extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            menuIsVisible: true,
            menuWhite: true,
            scrollTipIsVisible: true,
            scrollTipWhite: true,
            isAmenitiesCarouselActive: false,
            isHouseDetailsActive: false,
            currentSlideName: Home.name,
            rotatePhoneOrientation: props.isMobile ? "portrait" : null
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

    toggleRotatePhoneInstructionIfNecessary(): void {
        if (!this.props.isMobile) return;

        const forceLandscapeOrientation = this.state.rotatePhoneOrientation !== "landscape" && (this.state.isHouseDetailsActive || this.state.isAmenitiesCarouselActive);
        if (forceLandscapeOrientation) {
            this.setState({ rotatePhoneOrientation: "landscape" });
            return;
        }

        const isPortraitAlready = this.state.rotatePhoneOrientation === "portrait";
        if (!isPortraitAlready) this.setState({ rotatePhoneOrientation: "portrait" });
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

                    <Houses onCtaClick={() => this.toggleHouseDetailsPopover(true)} />

                    {!this.props.isMobile && <AllFloorPlans />}

                    <Amenities isMobile={this.props.isMobile} onAmenityClickMobile={() => this.toggleAmenitiesCarousel(true)} />
                    <Attraction />
                    <CreativeTeam />
                    <Developers />
                    <Contact />
                </VerticalSwipePage>

                <HousesDetails isActive={this.state.isHouseDetailsActive} setIsActive={(active: boolean) => this.toggleHouseDetailsPopover(active)} />
                <AmenitiesCarousel isActive={this.state.isAmenitiesCarouselActive} setIsActive={(active: boolean) => this.toggleAmenitiesCarousel(active)} />
                {this.state.rotatePhoneOrientation !== null && <RotatePhone forceOrientation={this.state.rotatePhoneOrientation} />}
            </VerticalSwipePageContext.Provider>
        );
    }

    toggleHouseDetailsPopover(active: boolean): void {
        this.setState({ isHouseDetailsActive: active }, () => {
            this.toggleRotatePhoneInstructionIfNecessary();
        });
    }

    toggleAmenitiesCarousel(active: boolean): void {
        this.setState({ isAmenitiesCarouselActive: active }, () => {
            this.toggleRotatePhoneInstructionIfNecessary();
        });
    }
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
    const userAgent = (typeof window === 'undefined' ? context.req?.headers['user-agent'] : window.navigator.userAgent) ?? "";
    const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
    return { props: { isMobile: isMobile } };
}
