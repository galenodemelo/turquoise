import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { Section, SectionHeading, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const HousesBackground = styled.div<AnimateOnActiveComponentProps>`
    ${Section}
    background-color: #ffffff;

    ${dissolveDefaultAnimation}
    animation-delay: 1s;

    ${(props) => {
        if (!props.triggeredAnimation) return ``;
        return `
            animation-play-state: running;
        `;
    }}

    ${BREAKPOINTS.upToTablet} {
        background-color: #f0eeef;
        overflow-x: hidden;

        > * {
            width: 140% !important;
            height: 40% !important;
            inset: auto auto 0 auto !important;
        }
    }
`;

export const HousesWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${BREAKPOINTS.upToTablet} {
        align-items: flex-start;

        ${SectionHeading} {
            text-align: left;
        }
    }
`;

export const HousesCTA = styled.a`
    display: block;
    background-color: ${COLORS.green};
    color: #ffffff;
    font-size: 1rem;
    padding: 14px 16px;
    transition: background-color 0.2s ease;
    cursor: pointer;

    &::after {
        display: inline-block;
        content: "";
        filter: brightness(0) invert(1);
        width: 32px;
        height: 20px;
        margin: -5px -2px -5px 4px;
        background: url("/img/ico/arrow-right-2.svg") center center no-repeat transparent;
        background-size: contain;
    }

    &:hover {
        background-color: ${COLORS.darkGreen};
    }

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.6rem;
        padding: 8px 12px 7px;

        &::after {
            width: 16px;
            height: 12px;
            margin: -2px 0 -2px 6px;
        }
    }
`;

export const HousesContent = styled.div<AnimateOnActiveComponentProps>`
    display: inline-flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: flex-start;
    width: 450px;
    margin-right: 10%;

    ${BREAKPOINTS.upToTablet} {
        width: 100%;
        margin-right: 0;
        row-gap: 16px;
        padding: 4% 0;
    }

    ${SectionHeading} {
        ${dissolveDefaultAnimation}
        animation-delay: 1.5s;
    }

    > p {
        ${dissolveDefaultAnimation}
        font-size: 1rem;
        line-height: 1.6;
        color: ${COLORS.darkGreen};

        ${BREAKPOINTS.upToTablet} {
            font-size: 0.5rem;
        }

        &:nth-of-type(1) {
            animation-delay: 2s;
        }
        &:nth-of-type(2) {
            animation-delay: 2.2s;
        }
        &:nth-of-type(3) {
            animation-delay: 2.6s;
        }
        &:nth-of-type(4) {
            animation-delay: 2.8s;
        }
    }

    ${BREAKPOINTS.upToTablet} {
        > h6 {
            ${dissolveDefaultAnimation}
            font-size: .8rem;
            font-weight: bold;
            color: ${COLORS.darkGreen};
            animation-delay: 2.4s;
        }
    }

    ${HousesCTA} {
        ${dissolveDefaultAnimation}
        animation-delay: 2.8s;
    }

    ${(props) => {
        if (!props.triggeredAnimation) return ``;

        return `
            > * {
                animation-play-state: running!important;
            }
        `;
    }}
`;
