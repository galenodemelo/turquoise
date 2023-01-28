import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const CreativeTeamWrapper = styled.div`
    ${SectionPadded}
    max-height: fit-content;
`;

export const CreativeTeamList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 72px;
    padding: 0 ${sectionHeadingExtraMargin};

    > li {
        width: 90%;
        max-width: 980px;

        &:nth-child(even) {
            align-self: flex-end;
            flex-direction: row-reverse;
            text-align: right;
        }
    }
`;
