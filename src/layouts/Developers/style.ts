import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import {
    SectionHeading,
    sectionHeadingExtraMargin,
    SectionPadded,
} from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const DevelopersList = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 0;
    width: 100%;
    padding: 0 ${sectionHeadingExtraMargin};
    box-sizing: border-box;

    > li {
        ${dissolveDefaultAnimation}
        max-width: 45%;

        ${BREAKPOINTS.upToTablet} {
            max-width: 100%;
        }
    }

    ${BREAKPOINTS.upToNotebook} {
        padding: 0;
    }

    ${BREAKPOINTS.upToTablet} {
        padding: 0;
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;
    }
`;

export const DevelopersWrapper = styled.div<AnimateOnActiveComponentProps>`
    ${SectionPadded}
    display: flex;
    flex-direction: column;

    ${SectionHeading} {
        ${dissolveDefaultAnimation}
        animation-delay: 1s;
    }

    ${DevelopersList} > li {
        ${[...Array(2)].map((_, index) => {
            return `&:nth-of-type(${index + 1}) { animation-delay: ${1.5 + index * 0.2}s; }`;
        })}
    }

    ${(props) => {
        if (!props.triggeredAnimation) return ``;
        return `
            ${SectionHeading},
            ${DevelopersList} > li {
                animation-play-state: running;
            }
        `;
    }}
`;
