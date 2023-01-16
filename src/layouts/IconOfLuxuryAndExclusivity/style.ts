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

export const Bar = styled.div`
    flex: 2;
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
    text-align:center;

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
`;
