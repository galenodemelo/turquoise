import {
    SectionHeading,
    sectionHeadingExtraMargin,
    SectionPadded,
} from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";
import { ImageItemWraperProps } from ".";

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

export const AccordionList = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 32px;
`;

export const Accordion = styled.details`
    > summary {
        list-style: none;
    }

    > summary::-webkit-details-marker {
        display: none;
    }
`;

export const AccordionHeader = styled.summary`
    color: ${COLORS.darkGreen};
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover,
    &[data-state-active="true"] {
        color: ${COLORS.green};
    }
`;

export const AccordionContent = styled.p`
    margin-top: 16px;
    color: ${COLORS.darkGreen};
    font-size: 0.8rem;
    line-height: 1.6;
`;

export const DetailsFooter = styled.div`
    display: inline-flex;
    justify-content: space-between;
    color: ${COLORS.darkGreen};
    font-size: 0.8rem;
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    align-self: stretch;
`;

export const ImageItem = styled.img<ImageItemWraperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity 0.6s ease;
`;
