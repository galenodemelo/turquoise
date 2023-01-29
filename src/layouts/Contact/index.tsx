import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import { ContactContent, ContactInfo, ContactWrapper, Form, FormField, FormFieldList, FormFootNote, FormRow, FormSubmit, LogoList } from "./style";

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
                        Contact info
                    </ContactInfo>

                    <LogoList>
                        Logo list
                    </LogoList>
                </ContactContent>
            </ContactWrapper>
        )
    }
}
