import styled from "styled-components";

export const COLORS = {
    gray: "#858585",
    green: "#1ca798",
    darkGreen: "#287e8c",
};

export const BREAKPOINTS = {
    upToTablet: "@media screen and (max-width: 1279px)",
    upToNotebook: "@media screen and (max-width: 1439px)",
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
