import Image from "next/image";
import React from "react";
import { AerialView, ExtraWrapper, SocialLink, SocialLinkWrapper } from "./style";

export default class Extra extends React.Component {

    render(): JSX.Element {
        return (
            <ExtraWrapper>
                <AerialView href="#">
                    Aerial View
                </AerialView>

                <SocialLinkWrapper>
                    <SocialLink href="#">
                        <Image src="/img/ico/instagram-logo.svg" alt="Instagram logo" title="Follow us on Instagram" width={24} height={24} />
                    </SocialLink>
                    <SocialLink href="#">
                        <Image src="/img/ico/facebook-logo.svg" alt="Facebook logo" title="Like us on Facebook" width={24} height={24} />
                    </SocialLink>
                </SocialLinkWrapper>
            </ExtraWrapper>
        )
    }
}
