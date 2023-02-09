import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import LocationMapImage from "./location-map-image";
import { LocationMapImageWrapper, LocationWrapper, Minimap } from "./style";

export default class Location extends AnimateOnActiveComponent {

    constructor(props: {}) {
        super(props, "Location")
    }

    componentJsx(): JSX.Element {
        return (
            <LocationWrapper>
                {this.wasAnimatedAlready &&
                    <LocationMapImageWrapper className="swiper-zoom-container">
                        <LocationMapImage
                            className="swiper-zoom-target"
                            preserveAspectRatio="xMidYMid slice"
                            style={{
                                position: "absolute",
                                margin: "0 auto",
                                top: 0,
                                left: "-2100px",
                                right: "-2000px",
                                height: "100%",
                                zIndex: -10
                            }}
                        />
                    </LocationMapImageWrapper>
                }
                <SectionHeading as="h2">Location</SectionHeading>
                <Minimap src="/img/location-minimap.svg" alt="Minimap with Florida pinpointed" />
            </LocationWrapper>
        )
    }
}
