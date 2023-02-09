import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const ConceptCarouselWrapper = styled.div`
    ${Section}
`;

export const SlideTitle = styled.h6<{ color: "white" | "green" }>`
    display: none;

    ${BREAKPOINTS.upToTablet} {
        display: block;
        position: absolute;
        bottom: 48px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 250px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.2;
        color: ${props => props.color === "green" ? COLORS.green : "#ffffff"};
        box-sizing: border-box;
    }
`;

export const BulletPaginationItem = styled.span`
    cursor: pointer;
`;

export const BulletPaginationWrapper = styled.nav`
    position: absolute;
    width: 32px;
    top: 0;
    right: 0;
    left: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
    gap: 16px;

    ${BREAKPOINTS.upToTablet} {
        bottom: 0;
        top: auto;
        flex-direction: row;
        width: 100%;
        height: 32px;
    }

    ${BulletPaginationItem} {
        width: 12px;
        height: 12px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 100%;

        &.active {
            background-color: #ffffff;
        }
    }
`;
