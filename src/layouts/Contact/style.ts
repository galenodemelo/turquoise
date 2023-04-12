import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS, COLORS } from "@styles/globals";
import styled from "styled-components";

export const ContactWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 120px;

    ${BREAKPOINTS.upToNotebook} {
        row-gap: 40px;
        height: unset;
        max-height: fit-content;
    }
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 0 ${sectionHeadingExtraMargin};
    column-gap: 20%;
    row-gap: 10%;

    ${BREAKPOINTS.upToNotebook} {
        padding: 0;
    }

    ${BREAKPOINTS.upToTablet} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 0px;
    }
`;

export const Form = styled.form`
    display: inline-flex;
    align-items: flex-end;
    column-gap: 32px;

    ${BREAKPOINTS.upToTablet} {
        flex-direction: column;
        row-gap: 24px;
    }
`;

export const FormFieldList = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 16px;
    flex: 1 1 0;

    ${BREAKPOINTS.upToNotebook} {
        row-gap: 16px;
    }
`;

export const FormField = styled.div`
    display: inline-flex;
    flex-direction: column-reverse;
    width: 100%;
    row-gap: 8px;

    > label {
        font-family: "Arboria";
        font-weight: 300;
        font-size: 1rem;
    }

    > *[required] + label::after {
        content: "*";
    }

    > input,
    > textarea,
    > select,
    > select > option {
        font-family: "Arboria";
        font-weight: 300;
        padding: 8px 16px;
        border: #000000 solid 1px;
        resize: none;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;

        ${BREAKPOINTS.upToNotebook} {
            padding: 4px 8px;
            font-size: 1rem;
        }
    }
`;

export const FormRow = styled.div`
    display: inline-flex;
    justify-content: space-between;
    column-gap: 32px;
    width: 100%;

    > ${FormField} {
        flex: 1 1 0;
    }
`;

export const FormFootNote = styled.p`
    margin: -0.5rem 0;
    font-family: "Arboria";
    font-weight: 300;
    font-size: 0.9rem;
`;

export const FormSubmit = styled.button`
    position: relative;
    width: 48px;
    height: 48px;
    margin-bottom: 2.2rem;
`;

const gapBetweenContactInfoItems = "48px";

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: ${gapBetweenContactInfoItems};
`;

export const CTA = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 16px;

    ${BREAKPOINTS.upToTablet} {
        flex-direction: column;
        align-items: start;
        row-gap: 24px;
    }
`;

export const CTAHeader = styled.span`
    font-family: "Arboria";
    font-weight: 300;
    font-size: 1rem;
`;

interface CTAButton {
    enabled: boolean;
}

export const CTAButton = styled.a<CTAButton>`
    position: relative;
    color: #ffffff;
    font-size: 1rem;
    padding: 14px 16px 13px;
    transition: background-color 0.2s ease;
    ${(props) => {
        if (!props.enabled) {
            return `
                pointer-events: none;
                background-color: ${COLORS.green}60;
                cursor: not-allowed;
            `;
        }

        return `
            background-color: ${COLORS.green};
            cursor: pointer;

            &:hover {
                background-color: ${COLORS.darkGreen};
            }
        `;
    }}

    &::after {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: calc(-32px + -5px);
        height: 70%;
        width: 32px;
        margin: auto 0;
        content: "";
        background: url("/img/ico/pdf.svg") center center no-repeat;
        background-size: contain;
    }
`;

export const Info = styled.address`
    display: inline-flex;
    flex-direction: column;
    font-style: normal;
    row-gap: 8px;
`;

export const InfoHeader = styled.h6`
    color: ${COLORS.green};
    font-weight: 500;
    font-size: 0.9rem;
`;

export const InfoItem = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 6px;
`;

export const InfoItemIcon = styled.span``;

export const InfoItemData = styled.span`
    font-size: 0.9rem;
    color: ${COLORS.gray};
`;

export const InfoFooter = styled.div`
    margin-top: ${gapBetweenContactInfoItems};
    font-size: 1rem;
    color: ${COLORS.gray};

    > b {
        font-weight: 700;
    }
`;

export const BrandList = styled.div`
    position: relative;
    grid-column: span 2;
    text-align: center;
    padding-top: 2%;

    ${BREAKPOINTS.upToTablet} {
        grid-column: initial;
        padding-top: 32px;
    }
`;
