import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const MasterplanWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    flex-direction: column;
    row-gap: 64px;
`;

export const MapWrapper = styled.div`
    display: inline-flex;
    align-items: flex-end;

    ${BREAKPOINTS.upToTablet} {
        flex-direction: column;
        row-gap: 32px;
        justify-content: center;
    }
`;

export const Map = styled.img`
    margin-left: calc(${sectionHeadingExtraMargin} - 32px);
    width: 65%;

    ${BREAKPOINTS.upToTablet} {
        margin-left: 0;
        width: 100%;
    }
`;

export const Legend = styled.ul`
    margin-bottom: 64px;
    width: 35%;
    counter-reset: legend-item;

    ${BREAKPOINTS.upToTablet} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        width: 100%;
        margin-bottom: 0;
        justify-content: space-between;
    }
`;

export const LegendItem = styled.li`
    ${BREAKPOINTS.upToTablet} {
        font-size: 0.6rem;
    }

    &:not(:last-of-type) {
        margin-bottom: 16px;
    }

    &::before {
        display: inline-block;
        counter-increment: legend-item;
        content: counter(legend-item);
        border-radius: 100%;
        width: 30px;
        height: 29px;
        margin-right: 24px;
        text-align: center;
        line-height: 32px;
        padding-top: 1px;
        background-color: ${COLORS.darkGreen};
        color: #ffffff;

        ${BREAKPOINTS.upToTablet} {
            font-size: 0.6rem;
            width: 24px;
            height: 23px;
            line-height: 24px;
            margin-right: 8px;
        }
    }
`;
