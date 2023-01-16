import { horizontalMargin, verticalMargin } from "@layouts/FloatingMenu/style";
import { SectionPadded } from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";

export const LocationWrapper = styled.div`
    ${SectionPadded}
    background: url("/img/location.jpg") center center no-repeat #ffffff;
    background-size: cover;
`;

export const Minimap = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`;
