import {
    SectionHeading,
    sectionHeadingExtraMargin,
    SectionPadded,
} from "@layouts/VerticalSwipePage/Section";
import styled from "styled-components";
export const AmenitiesWrapper = styled.div`
    ${SectionPadded}
    padding-right: 0;
    padding-bottom: 0;
    display: flex;
    align-items: stretch;
`;

export const Carousel = styled.div`
    display: inline-flex;
    align-items: stretch;
    width: 100%;
    padding-left: ${sectionHeadingExtraMargin};
    column-gap: 40px;
`;

export const Details = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: ${sectionHeadingExtraMargin};
    flex: 0 0 500px;
`;

export const DetailsHeading = styled(SectionHeading)`
    margin-left: 0;
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    align-self: stretch;
`;
