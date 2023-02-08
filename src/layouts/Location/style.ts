import { horizontalMargin, horizontalMobileMargin, verticalMargin } from "@layouts/FloatingMenu/style";
import { SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const LocationWrapper = styled.div`
    ${SectionPadded}
    background-size: cover;
`;

export const Minimap = styled.img`
    position: absolute;
    right: ${horizontalMargin};
    bottom: ${verticalMargin};
    max-width: 225px;
    width: 10%;

    ${BREAKPOINTS.upToTablet} {
        width: 25%;
        right: ${horizontalMobileMargin};
        bottom: ${horizontalMobileMargin};
    }
`;
