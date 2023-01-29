import { Section, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const HousesBackground = styled.div`
    ${Section}
    background-color: #f3f0f1;
`

export const HousesWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const HousesContent = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: flex-start;
    width: 275px;
    margin-right: 20%;

    > p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${COLORS.darkGreen};
    }
`

export const HousesCTA = styled.a`
    display: block;
    background-color: ${COLORS.green};
    color: #ffffff;
    font-size: 1rem;
    padding: 14px 16px 13px;
    transition: background-color 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: ${COLORS.darkGreen};
    }
`
