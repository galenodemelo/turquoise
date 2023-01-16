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

export const SectionHeading = styled.div`
    position: absolute;
    top: 14%;
    left: 8%;
	font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    color: ${COLORS.darkGreen};
`
