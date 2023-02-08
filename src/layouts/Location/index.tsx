import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import LocationMapImage from "./location-map-image";
import { LocationWrapper, Minimap } from "./style";

export default class Location extends AnimateOnActiveComponent {

    constructor(props: {}) {
        super(props, "Location")
    }

    componentJsx(): JSX.Element {
        return (
            <LocationWrapper>
                {this.wasAnimatedAlready &&
                    <LocationMapImage
                        preserveAspectRatio="xMidYMid slice"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%"
                        }}
                    />
                }
                <SectionHeading as="h2">Location</SectionHeading>
                <Minimap src="/img/location-minimap.svg" alt="Minimap with Florida pinpointed" />
            </LocationWrapper>
        )
    }
}
