import Image from "next/image";
import React from "react";
import { SurroundedByGreenAndBlueWrapper } from "./style";

export default class SurroundedByGreenAndBlue extends React.Component {

    render(): JSX.Element {
        return (
            <SurroundedByGreenAndBlueWrapper>
                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/surrounded-by-green-and-blue.jpg" alt="Father, mother and daughter playing golf at the sundown and the title 'Surrounded by green and blue'" />
            </SurroundedByGreenAndBlueWrapper>
        )
    }
}
