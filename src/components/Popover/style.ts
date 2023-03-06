import { Section } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const PopoverWrapper = styled.div<{ isActive: boolean }>`
    ${Section}
    z-index: 1000;
    width: 100%;
    transition: transform 1s ease;
    overflow-x: hidden;
    ${(props) => (props.isActive ? "" : "transform: translateY(100%);")}
    background-color: ${COLORS.green};

    .swiper-slide {
        overflow: hidden;
    }
`;
