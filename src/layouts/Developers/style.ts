import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const DevelopersWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    flex-direction: column;
`

export const DevelopersList = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 0;
    width: 100%;
    padding: 0 ${sectionHeadingExtraMargin};
    box-sizing: border-box;


    > li {
        max-width: 45%;
    }
`
