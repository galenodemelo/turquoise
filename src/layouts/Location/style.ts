import { horizontalMargin, verticalMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const LocationWrapper = styled.div`
    ${Section}
    background: url("/img/location.jpg") center center no-repeat #ffffff;
    background-size: cover;
`;

export const Minimap = styled.img`
    position: absolute;
    right: ${horizontalMargin};
    bottom: ${verticalMargin};
`;
