import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

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

    ${BREAKPOINTS.upToTablet} {
        height: 32px;
        width: 16px;
    }

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
