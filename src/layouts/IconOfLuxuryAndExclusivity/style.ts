import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const Bar = styled.div`
    transition: flex 3s ease;
    flex: 0;
    width: 3px;
    background-color: #ffffff;
`;

export const Text = styled.div`
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 56px;
    color: #ffffff;
    text-align: center;

    ${dissolveDefaultAnimation};
    animation-delay: 3s;

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.8;
    }
`;

export const Icon = styled.div`
    position: relative;
    flex: 1;

    ${dissolveDefaultAnimation};
    animation-delay: 3.5s;
`;

export const IconOfLuxuryAndExclusivityWrapper = styled.div<AnimateOnActiveComponentProps>`
    ${Section}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${COLORS.green};

    ${(props) => {
        if (!props.triggeredAnimation) return ``;

        return `
            ${Bar} {
                flex: 2;
            }

            ${Text},
            ${Icon} {
                animation-play-state: running;
            }
        `;
    }}
`;
