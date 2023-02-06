import { Section } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const ConceptCarouselWrapper = styled.div`
    ${Section}
`;

export const BulletPaginationItem = styled.span``;

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
    row-gap: 16px;

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
