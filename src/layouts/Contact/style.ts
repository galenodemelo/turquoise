import { sectionHeadingExtraMargin, SectionPadded } from "@layouts/VerticalSwipePage/Section";
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
    column-gap: 10%;
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
    > select {
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

export const ContactInfo = styled.div``;

export const LogoList = styled.ul`
    grid-column: span 2;
`;
