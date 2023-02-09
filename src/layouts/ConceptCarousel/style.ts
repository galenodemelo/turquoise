import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const ConceptCarouselWrapper = styled.div`
    ${Section}
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
