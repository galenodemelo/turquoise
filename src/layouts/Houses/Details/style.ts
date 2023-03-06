import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

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
    align-items: flex-start;
    flex-direction: column;
    z-index: 10;
    padding: 24px 0 24px 24px;
    row-gap: 8px;
    background-color: ${COLORS.green};
    transition: background-color .5s ease;

    &:hover {
        background-color: ${COLORS.darkGreen};
    }

    ${BREAKPOINTS.upToTablet} {
        bottom: 24px;
        border-bottom-color: #ffffff;

        &:hover {
            background-color: initial;
        }
    }

    &::before {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 48px;
        background: url("/img/ico/floor-plan.svg") left center no-repeat transparent;
        background-size: contain;
        content: "Floor plan";
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 500;
        padding-left: 64px;
        padding-right: 120px;

        ${BREAKPOINTS.upToTablet} {
            font-size: 1rem;
            height: 40px;
            padding-right: 64px;
        }
    }

    &::after {
        content: "";
        width: 100%;
        border-bottom: #ffffff solid 3px;
    }
}
`;
