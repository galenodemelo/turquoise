import { SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const AmenitiesWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    align-items: stretch;
    flex-direction: column;
    row-gap: 24px;
    padding-top: 6%;
    padding-bottom: 2%;
`;

export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1 1 0;
`;

export const CarouselItemTitle = styled.h6`
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #000000;
    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 75%);
    height: 245px;
    z-index: 10;
    padding-bottom: 40px;
    box-sizing: border-box;

    > span {
        color: #ffffff;
        font-size: 1.6rem;
    }
`;

export const ExtraInfo = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 112px;

    > span {
        font-size: 0.8rem;
        font-weight: 500;
        color: ${COLORS.darkGreen};
    }
`;
