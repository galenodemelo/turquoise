import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    padding: 32px 64px;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    box-sizing: border-box;
`;

interface LogoProps {
    white?: boolean;
}

export const Logo = styled.img<LogoProps>`
    width: 240px;
    filter: ${(props) => (props.white ? "brightness(0) invert(1)" : "brightness(1) invert(0)")};
`;
