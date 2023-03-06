import { BREAKPOINTS, COLORS } from "@styles/globals";
import {Props as RotatePhoneProps} from "."
import styled from "styled-components";

export const RotatePhoneWrapper = styled.div<RotatePhoneProps>`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("/img/ico/rotate-phone.svg") center center no-repeat ${COLORS.darkGreen};
    background-size: 80px;
    z-index: 10;

    ${BREAKPOINTS.upToTablet} and (orientation: landscape) {
        ${props => props.forceOrientation == "portrait" ? "display: block;" : ""}
    }

    ${BREAKPOINTS.upToTablet} and (orientation: portrait) {
        ${props => props.forceOrientation == "landscape" ? "display: block;" : ""}
    }
`
