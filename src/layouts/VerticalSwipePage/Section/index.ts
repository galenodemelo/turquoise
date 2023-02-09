import { horizontalMargin, horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled, { css } from "styled-components";

export const Section = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
`;

export const SectionPadded = css`
    ${Section}
    padding: 8% ${horizontalMargin};
    box-sizing: border-box;

    ${BREAKPOINTS.upToTablet} {
        padding: 8% ${horizontalMobileMargin};
    }
`;

export const sectionHeadingExtraMargin = "96px";

export const SectionHeading = styled.div<{ extraMargin?: boolean }>`
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    color: ${COLORS.darkGreen};
    ${(props) => (props.extraMargin === false ? "" : `margin-left: ${sectionHeadingExtraMargin};`)}

    ${BREAKPOINTS.upToNotebook} {
        margin-left: 0;
        width: 100%;
        text-align: center;
    }

    ${BREAKPOINTS.upToTablet} {
        margin-top: 48px;
        font-size: 1.2rem;
    }
`;
