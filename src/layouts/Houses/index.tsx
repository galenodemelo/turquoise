import AllFloorPlans from "@layouts/AllFloorPlans";
import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import Image from "next/image";
import { isDesktop } from "react-device-detect";
import { HousesBackground, HousesContent, HousesCTA, HousesWrapper } from "./style";

interface Props {
    isMobile: boolean;
    onCtaClick?: () => void;
}

export default class Houses extends AnimateOnActiveComponent<Props, {}> {

    constructor(props: Props) {
        super(props, "Houses");
    }

    componentJsx(): JSX.Element {
        return (
            <>
                <HousesBackground triggeredAnimation={this.wasAnimatedAlready}>
                    <Image
                        src={isDesktop ? "/img/background-houses.png" : "/img/background-houses-mobile.png"}
                        layout="fill"
                        objectFit="contain"
                        objectPosition={isDesktop ? "left center" : "left bottom"}
                        alt="Golden key on a gift box"
                        quality={100}
                    />
                </HousesBackground>
                <HousesWrapper>
                    <HousesContent triggeredAnimation={this.wasAnimatedAlready}>
                        <SectionHeading extraMargin={false}>
                            Houses
                        </SectionHeading>
                        <p>Contemporary, avant-garde, unlike anything seen before. Coastal living experience reimagined.</p>
                        <p>Boasting a collection of bespoke homes, designed with meticulous attention to detail and crafted to perfection, Turquoise will set a new standard of luxury in scenic 30A.</p>

                        {this.props.isMobile &&
                            <>
                                <h6>Experience the extraordinary</h6>
                                <p>11 different models designed by renowned architects. Exclusive models available upon request. Sizes from 3,200 to 5,500 sqft.</p>
                                <p>Click on the link below to access all the available house models and floor plans.</p>
                            </>
                        }

                        {!this.props.isMobile &&
                            <HousesCTA onClick={this.props.onCtaClick}>
                                Show residences
                            </HousesCTA>
                        }

                        {this.props.isMobile &&
                            <HousesCTA onClick={() => window.open(AllFloorPlans.MODELS_AND_FLOOR_PLANS_LINK, "blank", "noopener, noreferrer")}>
                                Models and floor plans
                            </HousesCTA>
                        }
                    </HousesContent>
                </HousesWrapper>
            </>
        );
    }
}
