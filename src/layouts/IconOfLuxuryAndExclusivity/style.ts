import { Section } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const IconOfLuxuryAndExclusivityWrapper = styled.div`
    ${Section}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${COLORS.green};
`;
