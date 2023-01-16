import { horizontalMargin } from "@layouts/FloatingMenu/style";
import { COLORS } from "@styles/globals";
import styled, { css } from "styled-components";

export const Section = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
`

export const SectionPadded = css`
    ${Section}
    padding: 8% ${horizontalMargin};
    box-sizing: border-box;
`

export const sectionHeadingExtraMargin = "96px"

export const SectionHeading = styled.div`
	font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    color: ${COLORS.darkGreen};
    margin-left: ${sectionHeadingExtraMargin};
`
