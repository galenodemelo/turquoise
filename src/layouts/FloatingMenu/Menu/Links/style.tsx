import { COLORS } from "@styles/globals";
import styled from "styled-components";

interface LinksWrapperProps {
    open: boolean;
}

const wrapperPaddingRight = "96px"

export const LinksWrapper = styled.aside<LinksWrapperProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    padding-left: 12vw;
    padding-right: ${wrapperPaddingRight};
    height: 100%;
    background-color: ${COLORS.green};
    z-index: 100;
    box-sizing: border-box;
    transform: translateX(${props => props.open ? "0%" : "-100%"});
    transition: transform 1s ease;
`

export const LinksClose = styled.button`
    position: absolute;
    top: 64px;
    right: ${wrapperPaddingRight};
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;

    &::before {
        content: "X";
    }
`

export const LinkList = styled.nav`
    display: inline-flex;
    justify-self: center;
    flex-direction: column;
    row-gap: 32px;
`

export const LinkItem = styled.a`
    color: #ffffff;
    font-size: 1.6rem;
    width: 100%;
    text-align: right;
    cursor: pointer;

    &::after {
        position: relative;
        display: block;
        content: "";
        top: 5px;
        width: 0;
        height: 3px;
        background-color: ${COLORS.darkGreen};
        transition: width .2s ease;
    }

    &:hover::after {
        width: 100%;
    }
`
