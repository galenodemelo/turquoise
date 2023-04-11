import { horizontalMobileMargin } from "@layouts/FloatingMenu/style";
import { Section } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
import { ImgHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
    ${Section}
`;

export interface ImageContentProps extends ImgHTMLAttributes<HTMLImageElement> {
    align?: "right";
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
                `;

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
        padding: 32px ${horizontalMobileMargin} 0;
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
        background: transparent;
    }
`;

export const SplittedSlide = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    height: 100%;

    ${ImageWrapper} {
        flex: 3;
        position: relative;
    }

    ${RightHeader} {
        flex: 2;

        ${BREAKPOINTS.upToTablet} {
            flex: 1;
        }
    }
`;

export const FloatingCardWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 32px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 32px;

    ${BREAKPOINTS.upToTablet} {
        row-gap: 12px;
        bottom: 12px;
    }
`

const FloatingCard = css`
    padding: 24px 0 24px 24px;
    background-color: ${COLORS.green};
    transition: background-color 0.5s ease;

    ${BREAKPOINTS.upToTablet} {
        padding: 12px 0 12px 12px;
    }
`;

export const Details = styled.div`
    ${FloatingCard}
    display: inline-flex;
    flex-direction: column;
    row-gap: 4px;
    right: 0;
`;

export const DetailsItem = styled.div`
    font-family: "Arboria";
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;

    ${BREAKPOINTS.upToTablet} {
        font-size: .5rem;
    }
`

export const FloorPlan = styled(ExternalLink)`
    ${FloatingCard}
    display: inline-flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 8px;

    &:hover {
        background-color: ${COLORS.darkGreen};
    }

    ${BREAKPOINTS.upToTablet} {
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
        font-size: 1rem;
        font-weight: 500;
        padding-left: 72px;
        padding-right: 96px;

        ${BREAKPOINTS.upToTablet} {
            font-size: .5rem;
            height: 24px;
            padding-left: 40px;
            padding-right: 48px;
        }
    }

    &::after {
        content: "";
        width: 100%;
        border-bottom: #ffffff solid 3px;

        ${BREAKPOINTS.upToTablet} {
            border-bottom-width: 1px;
        }
    }
}
`;
