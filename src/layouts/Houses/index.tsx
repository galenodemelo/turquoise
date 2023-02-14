import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import { BREAKPOINTS } from "@styles/globals";
import Image from "next/image";
import { HousesBackground, HousesContent, HousesCTA, HousesWrapper } from "./style";

interface Props {
    onCtaClick?: () => void
}

export default class Houses extends AnimateOnActiveComponent<Props, {}> {

    constructor(props: Props) {
        super(props, "Houses");
    }

    componentJsx(): JSX.Element {
        return (
            <>
                <HousesBackground triggeredAnimation={this.wasAnimatedAlready}>
                    <Image src="/img/background-houses.png" layout="fill" objectFit="contain" objectPosition="left center" alt="Golden key on a gift box" quality={100} />
                </HousesBackground>
                <HousesWrapper>
                    <HousesContent triggeredAnimation={this.wasAnimatedAlready}>
                        <SectionHeading extraMargin={false}>
                            Experience the extraordinary
                        </SectionHeading>
                        <p>Contemporary, avant-garde, unlike anything seen before. Coastal living experience reimagined.</p>
                        <p>Boasting a collection of bespoke homes, designed with meticulous attention to detail and crafted to perfection, Turquoise will set a new standard of luxury in scenic 30A.</p>

                        <HousesCTA onClick={this.props.onCtaClick}>
                            Our residences
                        </HousesCTA>
                    </HousesContent>
                </HousesWrapper>
            </>
        )
    }
}
