import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const AmenitiesWrapper = styled.div`
    ${Section}
    height: unset;
    max-height: fit-content;
    display: none;
    align-items: stretch;
    flex-direction: column;
    padding-top: 24px;
    row-gap: 24px;
    box-sizing: border-box;

    ${BREAKPOINTS.upToTablet} {
        display: flex;
    }
`;

export const AmenitiesList = styled.ul`
    display: inline-flex;
    flex-direction: column;
    justify-content: stretch;
    flex: 1 1 0;
    row-gap: 1px;
`;

export const AmenitiesItem = styled.li`
    position: relative;
    aspect-ratio: 16 / 6;
    min-height: 125px;
`;
