import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled, { keyframes } from "styled-components";
import { Props as RotatePhoneProps } from ".";

const rotatePhoneAnimation = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(0deg); }
    75% { transform: rotate(90deg); }
    100% { transform: rotate(90deg); }
`;

export const Icon = styled.div``

export const Instruction = styled.div`
    color: #ffffff;
    font-weight: 500;
    font-size: 1rem;
`

export const RotatePhoneWrapper = styled.div<RotatePhoneProps>`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.darkGreen};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 24px;
    z-index: 1000;

    ${BREAKPOINTS.upToTablet} and (orientation: landscape) {
        ${props => props.forceOrientation == "portrait" ? "display: flex;" : ""}
    }

    ${BREAKPOINTS.upToTablet} and (orientation: portrait) {
        ${props => props.forceOrientation == "landscape" ? "display: flex;" : ""}
    }

    > ${Icon} {
        animation-name: ${rotatePhoneAnimation};
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-play-state: running;

        ${BREAKPOINTS.upToTablet} and (orientation: landscape) {
            animation-direction: reverse;
        }
    }
`;
