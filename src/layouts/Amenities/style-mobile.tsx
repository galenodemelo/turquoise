import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const AmenitiesWrapper = styled.div`
    ${Section}
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
    flex: 1 1 0;
`;

export const AmenitiesItemMask = styled.h6`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: ${COLORS.darkGreen};
    mix-blend-mode: multiply;
`;

export const AmenitiesItemHeader = styled.h6`
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 2px;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-weight: 500;
    font-size: .7rem;
    box-sizing: border-box;
    padding: 0 8%;

    &::after {
        content: "";
        width: 16px;
        height: 16px;
        background: url("/img/ico/zoom-in.svg") center center no-repeat transparent;
        background-size: contain;
    }
`;
