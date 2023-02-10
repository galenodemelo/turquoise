import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const Bar = styled.div`
    transition: flex 2s ease;
    flex: 0;
    width: 3px;
    background-color: #ffffff;
`;

export const Text = styled.div`
    flex: 1 1 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 32px;
    color: #ffffff;
    text-align: center;

    ${dissolveDefaultAnimation};
    animation-delay: 1.5s;

    h2 {
        font-size: 1.8rem;
        font-weight: 500;

        ${BREAKPOINTS.upToTablet} {
            font-size: 1.4rem;
        }
    }

    p {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.8;

        ${BREAKPOINTS.upToTablet} {
            font-size: 0.8rem;
            text-align: left;
            padding: 0 ${horizontalMobileMargin};

            > br {
                display: none;
            }
        }
    }
`;

export const Icon = styled.div`
    position: relative;
    flex: 1;
    top: -8px;
    left: 6px;

    ${dissolveDefaultAnimation};
    animation-delay: 2s;
`;

export const IconOfLuxuryAndExclusivityWrapper = styled.div<AnimateOnActiveComponentProps>`
    ${Section}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${COLORS.green};
    row-gap: 56px;

    ${BREAKPOINTS.upToTablet} {
        row-gap: 40px;
    }

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
