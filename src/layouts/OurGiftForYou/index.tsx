import Image from "next/image";
import React from "react";
import { OurGiftForYouWrapper } from "./style";

export default class OurGiftForYou extends React.Component {

    render(): JSX.Element {
        return (
            <OurGiftForYouWrapper>
                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/our-gift-for-you.jpg" alt="Home facade with a parked golf car and the title 'Our gift for you'" />
            </OurGiftForYouWrapper>
        )
    }
}
