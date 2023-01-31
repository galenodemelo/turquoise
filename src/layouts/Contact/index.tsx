import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import ApiResponse from "src/libs/ApiResponse";
import { BrandList, ContactContent, ContactInfo, ContactWrapper, CTA, CTAButton, CTAHeader, Form, FormField, FormFieldList, FormFootNote, FormRow, FormSubmit, Info, InfoFooter, InfoHeader, InfoItem, InfoItemData, InfoItemIcon } from "./style";

interface State {
    origin: string | null
}

export default class Contact extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            origin: null
        }
    }

    sendContactForm(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const formElement = event.target as HTMLFormElement
        const formData: FormData = new FormData(formElement);

        const action: string | null = formElement.getAttribute("action")
        const method: string | null = formElement.getAttribute("method")
        if (!action || !method) throw new Error("Form missing action and/or method")

        const formDataAsJson: string = JSON.stringify(Object.fromEntries(formData.entries()))
        fetch(action, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formDataAsJson
        })
            .then(response => response.json())
            .then((response: ApiResponse) => {
                alert(response.message)
            })
            .catch(error => {
                const message = `An unexpected error ocurred. Error: ${error.message}`
                alert(message)
            })
    }

    render(): JSX.Element {
        return (
            <ContactWrapper>
                <SectionHeading>Contact us</SectionHeading>

                <ContactContent>
                    <Form action="/api/contact" method="POST" onSubmit={this.sendContactForm}>
                        <FormFieldList>
                            <FormRow>
                                <FormField>
                                    <input type="text" name="name" id="name" required />
                                    <label htmlFor="name">Name</label>
                                </FormField>

                                <FormField>
                                    <input type="text" name="lastName" id="lastName" required />
                                    <label htmlFor="lastName">Last name</label>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField>
                                    <input type="email" name="email" id="email" required />
                                    <label htmlFor="email">E-mail</label>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField>
                                    <input type="tel" name="phone" id="phone" required />
                                    <label htmlFor="phone">Phone</label>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField>
                                    <select name="origin" id="origin" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => this.setState({ origin: event.target.value })}>
                                        <option value=""></option>
                                        {["A friend", "Realtor", "Instagram", "Facebook", "Other"].map((option: string, index: number) => {
                                            return <option value={option} key={index}>{option}</option>
                                        })}
                                    </select>
                                    <label htmlFor="origin">How did you meet us?</label>
                                </FormField>

                                {this.state.origin == "Other" && (
                                    <FormField>
                                        <input type="text" name="specify" id="specify" autoFocus={true} />
                                        <label htmlFor="specify">Please, specify...</label>
                                    </FormField>
                                )}
                            </FormRow>
                            <FormRow>
                                <FormField>
                                    <textarea name="message" rows={4}></textarea>
                                    <label htmlFor="message">How can we help you?</label>
                                </FormField>
                            </FormRow>

                            <FormFootNote>
                                Note: leave your permission so that we can contact you, via e-mail or cell phone.
                            </FormFootNote>
                        </FormFieldList>

                        <FormSubmit>
                            <Image src="/img/ico/send.svg" layout="fill" alt="Click to send the form" />
                        </FormSubmit>
                    </Form>

                    <ContactInfo>
                        <Image src="/img/turquoise-logo-texturized.png" height={80} width={460} objectFit="contain" alt="Turquoise logo with sea texture" />
                        <CTA>
                            <CTAHeader>
                                Fill in the form to download our material.
                            </CTAHeader>
                            <CTAButton href="#" target="_blank">
                                Download
                            </CTAButton>
                        </CTA>
                        <Info>
                            <InfoHeader>More info:</InfoHeader>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/mail.svg" width={20} height={20} alt="Mail icon" />
                                </InfoItemIcon>
                                <InfoItemData>
                                    sales@turquoise.homes
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/phone.svg" width={20} height={20} alt="Phone icon" />
                                </InfoItemIcon>
                                <InfoItemData>
                                    +1 (850) 738-1551
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/instagram-logo.svg" width={20} height={20} alt="Instagram logo" />
                                </InfoItemIcon>
                                <InfoItemData>
                                    turquoise.homes
                                </InfoItemData>
                            </InfoItem>
                            <InfoFooter>
                                <b>Santa Rosa Beach,</b> Florida
                            </InfoFooter>
                        </Info>
                    </ContactInfo>

                    <BrandList>
                        <Image src="/img/brands.png" height={76} width={565} objectFit="contain" alt="Bravo America Company, Coldwell Banker Realty, Lana Development and Sunbelt logos" />
                    </BrandList>
                </ContactContent>
            </ContactWrapper>
        )
    }
}
