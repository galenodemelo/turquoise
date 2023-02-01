import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { SectionHeading, sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
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
    }
`

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
`
