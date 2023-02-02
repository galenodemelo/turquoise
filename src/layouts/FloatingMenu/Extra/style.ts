import { COLORS, ExternalLink } from "@styles/globals";
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
    font-size: 1.2rem;

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
`;

export const SocialLink = styled(ExternalLink)``;
