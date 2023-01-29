import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import { BrandList, ContactContent, ContactInfo, ContactWrapper, CTA, CTAButton, CTAHeader, Form, FormField, FormFieldList, FormFootNote, FormRow, FormSubmit, Info, InfoFooter, InfoHeader, InfoItem, InfoItemData, InfoItemIcon } from "./style";

export default class Contact extends React.Component {

    render(): JSX.Element {
        return (
            <ContactWrapper>
                <SectionHeading>Contact us</SectionHeading>

                <ContactContent>
                    <Form>
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
                                    <select name="origin" id="origin">
                                        <option value=""></option>
                                    </select>
                                    <label htmlFor="origin">How did you meet us?</label>
                                </FormField>
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
                                    <Image src="/img/ico/mail.svg" width={20} height={20} />
                                </InfoItemIcon>
                                <InfoItemData>
                                    sales@turquoise.homes
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/phone.svg" width={20} height={20} />
                                </InfoItemIcon>
                                <InfoItemData>
                                    +1 (850) 738-1551
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/instagram-logo.svg" width={20} height={20} />
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
                        <Image src="/img/brands.png" height={76} width={565} objectFit="contain" />
                    </BrandList>
                </ContactContent>
            </ContactWrapper>
        )
    }
}
