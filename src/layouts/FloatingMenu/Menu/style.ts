import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const NavButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    column-gap: 12px;
    background: none;
    border: 0;
    cursor: pointer;
`;

export const NavButtonIcon = styled.span`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    justify-content: space-evenly;
    width: 32px;

    hr {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 1px;
        border: 0;
        background: ${COLORS.darkGreen};
        line-height: 1;

        &:nth-of-type(1),
        &:nth-of-type(5) {
            width: 100%;
        }

        &:nth-of-type(2),
        &:nth-of-type(4) {
            width: 80%;
        }

        &:nth-of-type(3) {
            width: 60%;
        }
    }
`;

export const NavButtonLabel = styled.span`
    text-transform: uppercase;
    color: ${COLORS.darkGreen};
    font-size: 1.2rem;
    margin-bottom: -4px;
`;
