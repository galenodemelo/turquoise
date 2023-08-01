import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ApiResponse from "src/libs/ApiResponse";
import { BrandList, ContactContent, ContactInfo, ContactWrapper, CTA, CTAButton, CTAHeader, Form, FormField, FormFieldList, FormFootNote, FormRow, FormSubmit, Info, InfoFooter, InfoHeader, InfoItem, InfoItemData, InfoItemIcon } from "./style";

interface State {
    origin: string | null;
    formFilled: boolean;
    isSubmiting: boolean;
}

export default class Contact extends React.Component<{}, State> {

    recaptchaReference: React.RefObject<ReCAPTCHA>;

    constructor(props: {}) {
        super(props);
        this.state = {
            origin: null,
            formFilled: false,
            isSubmiting: false
        };

        this.recaptchaReference = React.createRef<ReCAPTCHA>();
        this.sendContactForm = this.sendContactForm.bind(this);
    }

    componentDidMount(): void {
        const formFilledLocalStorage = window.localStorage.getItem("formFilled");
        if (formFilledLocalStorage) this.setState({ formFilled: formFilledLocalStorage === "true" });
    }

    async sendContactForm(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        try {
            this.setState({ isSubmiting: true });

            event.preventDefault();
            const formElement = event.target as HTMLFormElement;
            const formData: FormData = new FormData(formElement);

            const action: string | null = formElement.getAttribute("action");
            const method: string | null = formElement.getAttribute("method");
            if (!action || !method) throw new Error("Form missing action and/or method");

            const recaptchaToken: string | null = await this.recaptchaReference.current!.executeAsync();
            if (!recaptchaToken?.length) {
                alert("Failed to verify ReCAPTCHA. Please, try again");
                return;
            }
            formData.append("recaptchaToken", recaptchaToken);

            const formDataAsJson: string = JSON.stringify(Object.fromEntries(formData.entries()));
            const response = await fetch(action, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: formDataAsJson
            });
            const responseData: ApiResponse = await response.json() as ApiResponse;
            this.setState({ formFilled: responseData.success });

            window.localStorage.setItem("formFilled", responseData.success.toString());
            alert(responseData.message);
            if (responseData.success) formElement.reset();
        } catch (error: any) {
            const message = `An unexpected error ocurred. Please, contact support.\nError: ${error.message}`;
            alert(message);
        } finally {
            this.setState({ isSubmiting: false });
            this.recaptchaReference.current!.reset();
        }
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
                                            return <option value={option} key={index}>{option}</option>;
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

                        <FormSubmit disabled={this.state.isSubmiting}>
                            <Image src="/img/ico/send.svg" layout="fill" alt="Click to send the form" objectFit="contain" />
                        </FormSubmit>

                        <ReCAPTCHA
                            ref={this.recaptchaReference}
                            size="invisible"
                            sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY ?? ""}
                        />
                    </Form>

                    <ContactInfo>
                        <Image src="/img/turquoise-logo-texturized.png" height={80} width={460} objectFit="contain" alt="Turquoise logo with sea texture" />
                        <CTA>
                            <CTAHeader>
                                Fill in the form to download our material.
                            </CTAHeader>
                            <CTAButton
                                href={`${this.state.formFilled ? "/docs/turquoise.homes-material.pdf" : ""}`}
                                target="_blank"
                                enabled={this.state.formFilled}
                            >
                                Download
                            </CTAButton>
                        </CTA>
                        <Info>
                            <InfoHeader>More info:</InfoHeader>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/mail.svg" width={12} height={12} alt="Mail icon" objectFit="contain" />
                                </InfoItemIcon>
                                <InfoItemData>
                                    sales@turquoise.homes
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/phone.svg" width={12} height={12} alt="Phone icon" objectFit="contain" />
                                </InfoItemIcon>
                                <InfoItemData>
                                    +1 (850) 738-1551
                                </InfoItemData>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemIcon>
                                    <Image src="/img/ico/instagram-logo.svg" width={12} height={12} alt="Instagram logo" objectFit="contain" />
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
        );
    }
}
