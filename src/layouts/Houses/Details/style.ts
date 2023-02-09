import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

export const HousesDetailsWrapper = styled.div`
    ${Section}
    z-index: 1000;
    width: 100%;
    transition: transform 1s ease;
    overflow-x: hidden;
    transform: translateY(100vh);
    background-color: ${COLORS.green};

    &[data-state-active="true"] {
        transform: translateY(0%);
    }

    .swiper-slide {
        overflow: hidden;
    }
`;

export const ImageWrapper = styled.div`
    ${Section}
`;

export interface ImageContentProps extends ImgHTMLAttributes<HTMLImageElement> {
    align?: "right"
}

export const ImageContent = styled.img<ImageContentProps>`
    position: absolute;
    top: 0;
    bottom: 0;

    ${(props) => {
        switch (props.align) {
            case "right":
                return `
                    right: 0;
                `

            default:
                return `
                    left: -100vw;
                    right: -100vw;
                `;
        }
    }}

    height: 100%;
    width: 100%;
    margin: auto;
    object-fit: cover;

    object-position: ${(props) => (props.align?.length ? props.align : "center center")};

    ${BREAKPOINTS.upToTablet} {
        height: 60vh;
        width: auto;
    }
`;

export const HeaderText = styled.h6`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.9rem;
    }
`;

export const TopHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 40px;
    text-align: center;

    ${BREAKPOINTS.upToTablet} {
        padding: 60px ${horizontalMobileMargin} 0;
        box-sizing: border-box;
    }
`;

export const RightHeader = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.green};
    padding: 0 48px;
    box-sizing: border-box;

    ${BREAKPOINTS.upToTablet} {
        position: relative;
        text-align: center;
        top: 90px;
        background: transparent;
    }
`;

export const SplittedSlide = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    height: 100%;

    ${BREAKPOINTS.upToTablet} {
        flex-direction: column-reverse;
    }

    ${ImageWrapper} {
        flex: 3;
        position: relative;
    }

    ${RightHeader} {
        flex: 2;
    }
`;

export const FloorPlan = styled(ExternalLink)`
    position: absolute;
    right: 0;
    bottom: 64px;
    display: flex;
    align-items: center;
    z-index: 10;
    border-bottom: ${COLORS.green} solid 3px;
    padding-right: 80px;
    padding-bottom: 16px;
    column-gap: 40px;
    transition: border-bottom-color 0.2s ease;

    ${BREAKPOINTS.upToTablet} {
        column-gap: 18px;
        padding-right: 60px;
        bottom: 24px;
        border-bottom-color: #ffffff;
    }

    &::before {
        content: "";
        width: 48px;
        height: 48px;
        background: url("/img/ico/floor-plan.svg") center center no-repeat transparent;
        background-size: contain;

        ${BREAKPOINTS.upToTablet} {
            font-size: 1rem;
            width: 40px;
            height: 40px;
        }
    }

    &::after {
        content: "Floor plan";
        color: #ffffff;
        font-size: 1rem;
        font-weight: 500;
    }

    &:hover {
        border-bottom-color: #ffffff;
    }
`;

const SlideControl = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 64px;
    width: 32px;
    background: url("/img/ico/arrow-right.svg") center center no-repeat;
    background-size: 80%;
    z-index: 10;
    cursor: pointer;
    transition: background-position 0.2s ease;

    &[disabled] {
        opacity: 0.5;
        pointer-events: none;
        cursor: default;
    }
`;

const controlMargin = "16px";

export const SlideControlPrevious = styled(SlideControl)`
    left: ${controlMargin};
    transform: rotate(180deg);
    background-position: left center;

    &:hover {
        background-position: right center;
    }
`;

export const SlideControlNext = styled(SlideControl)`
    right: ${controlMargin};
    background-position: right center;

    &:hover {
        background-position: left center;
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 10;
    padding: 10px 10px 7px;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 0.2s ease;

    ${BREAKPOINTS.upToTablet} {
        top: 16px;
        right: 16px;
    }

    &::after {
        content: "X";
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: bold;

        ${BREAKPOINTS.upToTablet} {
            font-size: 1rem;
        }
    }

    &:hover {
        transform: scale(1.3);
    }
`;
