import { Section } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const HousesListWrapper = styled.nav`
    ${Section}
    padding-top: 8%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 1px;
`;

export const HousesListItem = styled.button`
    position: relative;
    flex: 1 1 0;
`;

export const HousesListItemMask = styled.h6`
    position: absolute;
`;
