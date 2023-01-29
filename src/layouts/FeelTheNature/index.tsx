import Image from "next/image";
import React from "react";
import { FellTheNatureWrapper } from "./style";

export default class FeelTheNature extends React.Component {

    render(): JSX.Element {
        return (
            <FellTheNatureWrapper>
                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/feel-the-nature.jpg" alt="Couple walking along the beach with the title 'Feel the Nature'" />
            </FellTheNatureWrapper>
        )
    }
}
