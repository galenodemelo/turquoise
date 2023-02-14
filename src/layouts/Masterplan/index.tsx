import { Minimap } from "@layouts/Location/style";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import React from "react";
import { Legend, LegendItem, Map, MapWrapper, MasterplanWrapper } from "./style";

export default class Masterplan extends React.Component {

    render(): JSX.Element {
        return (
            <MasterplanWrapper>
                <SectionHeading>Masterplan</SectionHeading>

                <MapWrapper>
                    <Map src="/img/masterplan.jpg" alt="Map with common areas" />
                    <Legend>
                        <LegendItem>Entrance</LegendItem>
                        <LegendItem>Club House</LegendItem>
                        <LegendItem>Club House Pool</LegendItem>
                        <LegendItem>Playground</LegendItem>
                        <LegendItem>Sunset Tower</LegendItem>
                        <LegendItem>{"Fire Pit's"}</LegendItem>
                        <LegendItem>Pickcleball</LegendItem>
                        <LegendItem>Walking Trails</LegendItem>
                        <LegendItem>Fox Lake</LegendItem>
                    </Legend>
                    <Minimap src="/img/masterplan-minimap.svg" />
                </MapWrapper>
            </MasterplanWrapper>
        )
    }
}
