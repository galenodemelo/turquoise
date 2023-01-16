import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
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
`;

export const Map = styled.img`
    margin-left: calc(${sectionHeadingExtraMargin} - 32px);
    width: 65%;
`;

export const Legend = styled.ul`
    margin-bottom: 64px;
    width: 35%;
    counter-reset: legend-item;
`;

export const LegendItem = styled.li`
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
    }
`;
