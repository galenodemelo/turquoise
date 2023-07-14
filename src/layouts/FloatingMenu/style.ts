import { BREAKPOINTS, COLORS, ExternalLink, SETTINGS } from "@styles/globals";
import styled from "styled-components";
import { FloatingMenuProps } from ".";
import { AerialView, ExtraLink, SocialLinkWrapper } from "./Extra/style";
import { NavButtonIcon, NavButtonLabel } from "./Menu/style";

export const horizontalMargin = "64px";
export const verticalMargin = "32px";

export const horizontalMobileMargin = "32px";

export const LogoWrapper = styled.div`
    text-align: center;
`;

export const Logo = styled.img`
    width: 240px;

    ${BREAKPOINTS.upToTablet} {
        position: relative;
        top: 3px;
        width: 130px;
        height: 22px;
    }
`;

export const Header = styled.header<FloatingMenuProps>`
    position: fixed;
    padding: ${verticalMargin} ${horizontalMargin};
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 1000;
    box-sizing: border-box;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: all ${SETTINGS.swiper.speedInSeconds}s ease;

    > * {
        flex: 1;
    }

    ${BREAKPOINTS.upToTablet} {
        padding: 12px 16px;
        justify-content: space-between;

        > * {
            flex: initial;
        }

        ${(props) => {
            if (props.white) return "";

            return `
            background-color: #ffffff;
            border-bottom: ${COLORS.green} solid 1px;
        `;
        }}
    }

    ${Logo},
    ${NavButtonIcon},
    ${NavButtonLabel},
    ${SocialLinkWrapper} {
        filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
        transition: filter ${SETTINGS.swiper.speedInSeconds}s ease;
    }

    ${ExtraLink} {
        color: ${(props) => (props.white ? "#ffffff" : COLORS.darkGreen)};
        transition: color ${SETTINGS.swiper.speedInSeconds}s ease;
    }

    ${AerialView} {
        background-color: ${(props) => (props.white ? "#ffffff" : COLORS.darkGreen)};
        color: ${(props) => (props.white ? COLORS.darkGreen : "#ffffff")};
        transition: all ${SETTINGS.swiper.speedInSeconds}s ease;

        &::after {
            transition: filter ${SETTINGS.swiper.speedInSeconds}s ease;
            filter: ${(props) =>
                props.white ? "brightness(1) invert(0)" : "brightness(0) invert(1)"};
        }
    }
`;
