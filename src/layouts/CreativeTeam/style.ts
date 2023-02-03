import { AnimateOnActiveComponentProps } from "@layouts/AnimateOnActiveComponent";
import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import {
    SectionHeading,
    sectionHeadingExtraMargin,
    SectionPadded,
} from "@layouts/VerticalSwipePage/Section";
import { dissolveDefaultAnimation } from "@styles/animations";
import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const CreativeTeamList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 72px;
    padding: 0 ${sectionHeadingExtraMargin};

    ${BREAKPOINTS.upToNotebook} {
        row-gap: 24px;
    }

    ${BREAKPOINTS.upToTablet} {
        padding: 0 ${horizontalMobileMargin};
        row-gap: 24px;
        margin-top: 40px;
    }

    > li {
        ${dissolveDefaultAnimation}
        width: 90%;
        max-width: 980px;

        ${BREAKPOINTS.upToNotebook} {
            max-width: 800px;
        }

        &:nth-child(even) {
            align-self: flex-end;
            flex-direction: row-reverse;
            text-align: right;
        }
    }
`;

export const CreativeTeamWrapper = styled.div<AnimateOnActiveComponentProps>`
    ${SectionPadded}
    max-height: fit-content;

    ${SectionHeading} {
        ${dissolveDefaultAnimation}
        animation-delay: 1s;
    }

    ${CreativeTeamList} > li {
        ${[...Array(7)].map((_, index) => {
            return `&:nth-of-type(${index + 1}) { animation-delay: ${1.5 + index * 0.2}s; }`;
        })}
    }

    ${(props) => {
        if (!props.triggeredAnimation) return ``;
        return `
            ${SectionHeading},
            ${CreativeTeamList} > li {
                animation-play-state: running;
            }
        `;
    }}
`;
