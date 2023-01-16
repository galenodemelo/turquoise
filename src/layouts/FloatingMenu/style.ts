import { SETTINGS } from "@styles/globals";
import styled from "styled-components";
import { FloatingMenuProps } from ".";
import { ExtraWrapper } from "./Extra/style";
import { NavButtonWrapper } from "./Menu/style";

export const horizontalMargin = "64px"
export const verticalMargin = "32px"

export const LogoWrapper = styled.div`
    text-align: center;
`;

export const Logo = styled.img`
    width: 240px;
`;

export const Header = styled.header<FloatingMenuProps>`
    position: fixed;
    padding: ${verticalMargin} ${horizontalMargin};
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 100;
    box-sizing: border-box;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity ${SETTINGS.swiper.speedInSeconds}s ease;

    > * {
        flex: 1;
    }

    ${Logo},
    ${NavButtonWrapper},
    ${ExtraWrapper} {
        filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
        transition: filter ${SETTINGS.swiper.speedInSeconds}s ease;
    }
`;
