import Image from "next/image";
import React from "react";
import { ConceptMapWrapper } from "./style";

export default class ConceptMap extends React.Component {

    render(): JSX.Element {
        return (
            <ConceptMapWrapper>
                <Image layout="fill" objectFit="cover" objectPosition="center center" src="/img/carousel/concept/concept-map.jpg" alt="Conceptual map of Turquoise surroundings" />
            </ConceptMapWrapper>
        )
    }
}
