import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { Section, SectionHeading, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { COLORS } from "@styles/globals";
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
`;

export const HousesWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

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
`;

export const HousesContent = styled.div<AnimateOnActiveComponentProps>`
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
