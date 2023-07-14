import { css, keyframes } from "styled-components";

export const horizontalGrowShrink = keyframes`
    0% { width: 60%; }
    100% { width: 100%; }
`;

export const dissolve = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const dissolveDefaultAnimation = css`
    opacity: 0;
    animation-name: ${dissolve};
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: paused;
`;

export const heartbeat = keyframes`
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.1);
                transform: scale(1.1);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
`;
