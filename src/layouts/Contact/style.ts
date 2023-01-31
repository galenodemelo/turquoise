import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
import { COLORS } from "@styles/globals";
import styled from "styled-components";

export const ContactWrapper = styled.div`
    ${SectionPadded}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 80px;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 0 ${sectionHeadingExtraMargin};
    column-gap: 12%;
    row-gap: 10%;
`;

export const Form = styled.form`
    display: inline-flex;
    align-items: flex-end;
    column-gap: 32px;
`;

export const FormFieldList = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 32px;
    flex: 1 1 0;
`;

export const FormField = styled.div`
    display: inline-flex;
    flex-direction: column-reverse;
    width: 100%;
    row-gap: 8px;

    > label {
        font-family: "Arboria";
        font-weight: 300;
        font-size: 1.4rem;
    }

    > *[required] + label::after {
        content: "*";
    }

    > input,
    > textarea,
    > select,
    > select > option {
        font-family: "Arboria";
        padding: 8px 16px;
        border: #000000 solid 1px;
        resize: none;
        font-size: 1.2rem;
        width: 100%;
        box-sizing: border-box;
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
    margin: -1rem 0;
    font-family: "Arboria";
    font-size: 1rem;
`;

export const FormSubmit = styled.button`
    position: relative;
    width: 64px;
    height: 64px;
    margin-bottom: 2rem;
`;

const gapBetweenContactInfoItems = "48px"

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
`;

export const CTAHeader = styled.span`
    font-family: "Arboria";
    font-size: 1.2rem;
`;

export const CTAButton = styled.a`
    position: relative;
    background-color: ${COLORS.green};
    color: #ffffff;
    font-size: 1rem;
    padding: 14px 16px 13px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${COLORS.darkGreen};
    }

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
    row-gap: 12px;
`

export const InfoHeader = styled.h6`
    color: ${COLORS.green};
    font-weight: 500;
    font-size: 1.2rem;
`

export const InfoItem = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 12px;
`

export const InfoItemIcon = styled.span``

export const InfoItemData = styled.span`
    font-size: 1rem;
    color: ${COLORS.gray};
`

export const InfoFooter = styled.div`
    margin-top: ${gapBetweenContactInfoItems};
    font-size: 1rem;
    color: ${COLORS.gray};

    > b {
        font-weight: 700;
    }
`

export const BrandList = styled.div`
    position: relative;
    grid-column: span 2;
    text-align: center;
`;
