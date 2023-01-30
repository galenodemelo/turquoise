import { Section } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const AttractionWrapper = styled.ul`
    ${Section}
    display: flex;
    align-items: stretch;
`;

export const LocationGalleryItem = styled.li<{ state: "expanded" | "collapsed" }>`
    position: relative;
    overflow: hidden;
    flex: ${(props) => (props.state == "expanded" ? "1 1 100%" : "1 1 0")};
    transition: flex-basis 0.8s ease;

    &::after {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${COLORS.darkGreen};
        mix-blend-mode: hard-light;
        transition: opacity 0.4s ease;
        cursor: pointer;
        opacity: ${(props) => (props.state === "expanded" ? "0" : "1")};
    }

    &:hover::after {
        opacity: 0;
    }
`;

export const ImageCaption = styled.div`
    position: absolute;
    left: 0;
    bottom: 72px;
    color: #ffffff;
    z-index: 10;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 12px;
    width: 90%;
    max-width: 450px;
    border-bottom: ${COLORS.darkGreen} solid 4px;
`;
