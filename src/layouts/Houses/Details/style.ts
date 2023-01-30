import { Section } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const HousesDetailsWrapper = styled.div`
    ${Section}
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 1s ease;

    &[data-state-active="true"] {
        transform: translateX(0%);
    }
`;

export const HeaderText = styled.h6`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 500;
`;

export const TopHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 40px;
    text-align: center;
`;

export const RightHeader = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.green};
`;

export const SplittedSlide = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    height: 100%;

    > *:nth-child(1) {
        flex: 3;
        position: relative;
    }

    > *:nth-child(2) {
        flex: 2;
    }
`;

export const FloorPlan = styled.a`
    position: absolute;
    right: 0;
    bottom: 64px;
    display: flex;
    align-items: center;
    z-index: 10;
    border-bottom: ${COLORS.green} solid 3px;
    padding-right: 120px;
    padding-bottom: 16px;
    column-gap: 40px;

    &::before {
        content: "";
        width: 56px;
        height: 56px;
        background: url("/img/ico/floor-plan.svg") center center no-repeat transparent;
        background-size: contain;
    }

    &::after {
        content: "Floor plan";
        color: #ffffff;
        font-size: 1.2rem;
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 10;
    padding: 10px 10px 7px;
    border-radius: 100%;
    cursor: pointer;

    &::after {
        content: "X";
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: bold;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
