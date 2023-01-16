import { SETTINGS } from "@styles/globals";
import styled from "styled-components";

export const horizontalMargin = "64px"
export const verticalMargin = "32px"

interface HeaderProps {
    visible: boolean;
}

export const Header = styled.header<HeaderProps>`
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
`;

export const LogoWrapper = styled.div`
    text-align: center;
`;

interface LogoProps {
    white?: boolean;
}

export const Logo = styled.img<LogoProps>`
    width: 240px;
    filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
`;
