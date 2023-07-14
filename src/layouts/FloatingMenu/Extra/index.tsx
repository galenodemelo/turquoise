import Image from "next/image";
import React from "react";
import { isDesktop } from "react-device-detect";
import { AerialView, ExtraLink, ExtraWrapper, SocialLink, SocialLinkWrapper } from "./style";

export default class Extra extends React.Component {

    render(): JSX.Element {
        return (
            <ExtraWrapper>
                {isDesktop && <ExtraLink />}
                {isDesktop && <AerialView />}

                <SocialLinkWrapper>
                    <SocialLink href="https://www.instagram.com/turquoise.homes/">
                        <Image src="/img/ico/instagram-logo.svg" alt="Instagram logo" title="Follow us on Instagram" layout="fill" objectFit="contain" />
                    </SocialLink>
                    <SocialLink href="https://www.facebook.com/turquoise.fl/">
                        <Image src="/img/ico/facebook-logo.svg" alt="Facebook logo" title="Like us on Facebook" layout="fill" objectFit="contain" />
                    </SocialLink>
                </SocialLinkWrapper>
            </ExtraWrapper>
        );
    }
}
