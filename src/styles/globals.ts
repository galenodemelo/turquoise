import styled from "styled-components";

export const COLORS = {
    gray: "#858585",
    green: "#1ca798",
    darkGreen: "#287e8c",
};

export const BREAKPOINTS = {
    upToTablet: "@media screen and (max-width: 1200px)",
    upToNotebook: "@media screen and (max-width: 1400px)",
    upToMonitor: "@media screen and (max-width: 1660px)",
};

export const SETTINGS = {
    swiper: {
        speedInSeconds: 1,
        speedInMilliseconds: 1 * 1000,
    },
};

export const ExternalLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer",
})``;

export const DarkGreenMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: ${COLORS.darkGreen};
    mix-blend-mode: multiply;
`;

export const MaskTitle = styled.h6<{ scale?: number }>`
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 4px;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-weight: 500;
    font-size: ${props => props.scale !== undefined ? (.7 * props.scale).toFixed(2) : .7 }rem;
    box-sizing: border-box;
    padding: 8px 8% 0;

    &::after {
        content: "";
        width: 16px;
        height: 16px;
        background: url("/img/ico/zoom-in.svg") center center no-repeat transparent;
        background-size: contain;
    }

    > small {
        font-size: 90%;
    }
`;
