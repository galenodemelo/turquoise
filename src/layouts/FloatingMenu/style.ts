import { BREAKPOINTS, SETTINGS } from "@styles/globals";
import styled from "styled-components";
import { FloatingMenuProps } from ".";
import { ExtraWrapper } from "./Extra/style";
import { NavButtonIcon, NavButtonLabel } from "./Menu/style";

export const horizontalMargin = "64px";
export const verticalMargin = "32px";

export const LogoWrapper = styled.div`
    text-align: center;
`;

export const Logo = styled.img`
    width: 240px;

    ${BREAKPOINTS.upToTablet} {
        width: 160px;
        height: 100%;
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
    transition: opacity ${SETTINGS.swiper.speedInSeconds}s ease;

    ${BREAKPOINTS.upToTablet} {
        padding: 12px 2%;
    }

    > * {
        flex: 1;
    }

    ${Logo},
    ${NavButtonIcon},
    ${NavButtonLabel},
    ${ExtraWrapper} {
        filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
        transition: filter ${SETTINGS.swiper.speedInSeconds}s ease;
    }
`;
