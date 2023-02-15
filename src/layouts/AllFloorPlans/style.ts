import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
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
    width: 450px;
    max-width: 80%;

    ${BREAKPOINTS.upToTablet} {
        row-gap: 16px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8;

        ${dissolveDefaultAnimation};
        animation-delay: 1.5s;

        ${BREAKPOINTS.upToTablet} {
            font-size: 0.8rem;
            text-align: left;

            > br {
                display: none;
            }
        }
    }
`;

export const CTA = styled(ExternalLink)`
    display: block;
    background-color: #ffffff;
    color: ${COLORS.green};
    font-size: 1rem;
    padding: 14px 16px;
    transition: background-color 0.2s ease;
    cursor: pointer;

    ${dissolveDefaultAnimation};
    animation-delay: 2s;

    &:hover {
        background-color: #f0f0f0;
    }

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.8rem;
        padding: 10px 12px 9px;
    }
`;

export const AllFloorPlansWrapper = styled.div<AnimateOnActiveComponentProps>`
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

            ${Text} > p,
            ${CTA} {
                animation-play-state: running;
            }

            &::after {
                content: "";
                flex: 2;
            }
        `;
    }}
`;
