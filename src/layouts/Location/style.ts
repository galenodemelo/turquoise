import {
    horizontalMargin,
    horizontalMobileMargin,
    verticalMargin,
} from "@layouts/FloatingMenu/style";
import { Section, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const LocationWrapper = styled.div`
    ${SectionPadded}
    background-size: cover;
`;

export const LocationMapImageWrapper = styled.div`
    ${Section}
`;

export const LocationMapDesktop = styled.svg`
    ${BREAKPOINTS.upToMonitor} {
        display: none;
    }
`;
export const LocationMapMobile = styled.svg`
    display: none;

    ${BREAKPOINTS.upToMonitor} {
        display: block;
    }
`;

export const Minimap = styled.img`
    position: absolute;
    right: ${horizontalMargin};
    bottom: ${verticalMargin};
    max-width: 225px;
    width: 10%;
    transform: scale(1) !important;

    ${BREAKPOINTS.upToTablet} {
        width: 25%;
        right: ${horizontalMobileMargin};
        bottom: ${horizontalMobileMargin};
    }
`;
