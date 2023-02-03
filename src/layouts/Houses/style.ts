import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { Section, SectionHeading, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const HousesBackground = styled.div<AnimateOnActiveComponentProps>`
    ${Section}
    background-color: #f3f0f1;

    ${dissolveDefaultAnimation}
    animation-delay: 1s;

    ${(props) => {
        if (!props.triggeredAnimation) return ``;
        return `
            animation-play-state: running;
        `;
    }}

    ${BREAKPOINTS.upToTablet} {
        overflow-x: hidden;

        > * {
            width: 150% !important;
            height: 50% !important;
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

    &:hover {
        background-color: ${COLORS.darkGreen};
    }
`;

export const HousesContent = styled.div<AnimateOnActiveComponentProps>`
    display: inline-flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: flex-start;
    width: 275px;
    margin-right: 20%;

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.8rem;
        width: 100%;
        margin-right: 0;
        row-gap: 24px;
        padding: 8%;
    }

    > p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${COLORS.darkGreen};

        ${BREAKPOINTS.upToTablet} {
            font-size: 0.8rem;
        }
    }

    ${SectionHeading} {
        ${dissolveDefaultAnimation}
        animation-delay: 1.5s;
    }

    > p {
        ${dissolveDefaultAnimation}

        &:nth-of-type(1) {
            animation-delay: 2s;
        }
        &:nth-of-type(2) {
            animation-delay: 2.2s;
        }
        &:nth-of-type(3) {
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
