import { BREAKPOINTS, COLORS, ExternalLink } from "@styles/globals";
import styled from "styled-components";

export const ExtraWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 40px;
    justify-content: flex-end;
`;

export const AerialView = styled(ExternalLink)`
    display: inline-flex;
    align-items: center;
    column-gap: 8px;
    color: ${COLORS.darkGreen};
    line-height: 1;
    font-size: 1rem;
    padding: 12px 18px 10px;

    ${BREAKPOINTS.upToTablet} {
        display: none;
    }

    &::after {
        position: relative;
        top: -2px;
        display: inline-block;
        content: "";
        width: 20px;
        height: 20px;
        background: url("/img/ico/arrow-circled.svg") center center no-repeat transparent;
        background-size: contain;
    }
`;

export const SocialLinkWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 16px;

    ${BREAKPOINTS.upToTablet} {
        column-gap: 8px;
    }
`;

export const SocialLink = styled(ExternalLink)`
    position: relative;
    width: 24px;
    height: 24px;

    ${BREAKPOINTS.upToTablet} {
        width: 20px;
        height: 20px;
    }
`;
