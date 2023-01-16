import { horizontalMargin, verticalMargin } from "@layouts/FloatingMenu/style";
import { COLORS, SETTINGS } from "@styles/globals";
import styled from "styled-components";
import { ScrollTipProps } from "./";

export const ScrollTipWrapper = styled.div<ScrollTipProps>`
    position: fixed;
    left: ${horizontalMargin};
    bottom: ${verticalMargin};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 16px;
    z-index: 100;
    filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: filter ${SETTINGS.swiper.speedInSeconds}s ease,
        opacity ${SETTINGS.swiper.speedInSeconds}s ease;
`;

export const Icon = styled.img`
    height: 64px;
    position: relative;
    left: -2px;
`;

export const Text = styled.div`
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    color: ${COLORS.darkGreen};
    font-size: 1rem;
    font-weight: bold;
`;
