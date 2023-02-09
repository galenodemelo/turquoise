import { BREAKPOINTS } from "@styles/globals";
import styled from "styled-components";

export const TeamMemberWrapper = styled.li`
    display: inline-flex;
    align-items: center;
    column-gap: 32px;

    ${BREAKPOINTS.upToTablet} {
        column-gap: 16px;
        align-items: start;
    }
`;

export const PhotoContainer = styled.div`
    position: relative;
    border-radius: 100%;
    width: 275px;
    height: 275px;
    overflow: hidden;

    ${BREAKPOINTS.upToNotebook} {
        width: 150px;
        height: 150px;
    }

    ${BREAKPOINTS.upToTablet} {
        width: 64px;
        height: 64px;
    }
`;

export const InfoContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0;
`;

export const Name = styled.h5`
    width: 100%;
    font-weight: 500;
    font-size: 1.4rem;
    text-transform: uppercase;

    ${BREAKPOINTS.upToNotebook} {
        font-size: 1.2rem;
    }

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.8rem;
    }
`;

export const Position = styled.h6`
    margin-top: 8px;
    width: 100%;
    font-size: 1.2rem;
    text-transform: uppercase;

    ${BREAKPOINTS.upToNotebook} {
        font-size: 1rem;
    }

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.7rem;
    }
`;

export const Description = styled.p`
    margin-top: 12px;
    width: 100%;
    font-family: "Arboria";
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.4;

    ${BREAKPOINTS.upToNotebook} {
        font-size: 1rem;
    }

    ${BREAKPOINTS.upToTablet} {
        font-size: 0.6rem;
        line-height: 1.6;
    }
`;
