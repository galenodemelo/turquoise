import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import React from "react";
import { LocationWrapper, Minimap } from "./style";

export default class Location extends React.Component {

    render(): JSX.Element {
        return (
            <LocationWrapper>
                <SectionHeading as="h2">Location</SectionHeading>
                <Minimap src="/img/location-minimap.svg" alt="Minimap with Florida pinpointed" />
            </LocationWrapper>
        )
    }
}
