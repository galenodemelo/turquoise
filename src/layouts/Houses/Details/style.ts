import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
import styled from "styled-components";

export const HousesDetailsWrapper = styled.div`
    ${Section}
    z-index: 1000;
    width: 100%;
    transition: transform 1s ease;
    overflow-x: hidden;
    transform: translateY(100vh);

    &[data-state-active="true"] {
        transform: translateY(0%);
    }
`;

export const HeaderText = styled.h6`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;

    ${BREAKPOINTS.upToTablet} {
        font-size: 1rem;
    }
`;

export const TopHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 40px;
    text-align: center;

    ${BREAKPOINTS.upToTablet} {
        padding: 80px 8% 0;
        box-sizing: border-box;
    }
`;

export const RightHeader = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.green};
    padding: 0 48px;
    box-sizing: border-box;
`;

export const SplittedSlide = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    height: 100%;

    ${BREAKPOINTS.upToTablet} {
        flex-direction: column;
    }

    > *:nth-child(1) {
        flex: 3;
        position: relative;
    }

    > *:nth-child(2) {
        flex: 2;
    }
`;

export const FloorPlan = styled(ExternalLink)`
    position: absolute;
    right: 0;
    bottom: 64px;
    display: flex;
    align-items: center;
    z-index: 10;
    border-bottom: ${COLORS.green} solid 3px;
    padding-right: 80px;
    padding-bottom: 16px;
    column-gap: 40px;
    transition: border-bottom-color 0.2s ease;

    ${BREAKPOINTS.upToTablet} {
        column-gap: 18px;
        padding-right: 60px;
    }

    &::before {
        content: "";
        width: 48px;
        height: 48px;
        background: url("/img/ico/floor-plan.svg") center center no-repeat transparent;
        background-size: contain;

        ${BREAKPOINTS.upToTablet} {
            font-size: 1rem;
            width: 40px;
            height: 40px;
        }
    }

    &::after {
        content: "Floor plan";
        color: #ffffff;
        font-size: 1rem;
        font-weight: 500;
    }

    &:hover {
        border-bottom-color: #ffffff;
    }
`;

const SlideControl = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 64px;
    width: 32px;
    background: url("/img/ico/arrow-right.svg") center center no-repeat;
    background-size: 80%;
    z-index: 10;
    cursor: pointer;
    transition: background-position .2s ease;

    &[disabled] {
        opacity: 0.5;
        pointer-events: none;
        cursor: default;
    }
`;

const controlMargin = "16px";

export const SlideControlPrevious = styled(SlideControl)`
    left: ${controlMargin};
    transform: rotate(180deg);
    background-position: left center;

    &:hover {
        background-position: right center;
    }
`;

export const SlideControlNext = styled(SlideControl)`
    right: ${controlMargin};
    background-position: right center;

    &:hover {
        background-position: left center;
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
    transition: transform 0.2s ease;

    &::after {
        content: "X";
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: bold;
    }

    &:hover {
        transform: scale(1.3);
    }
`;
