import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { AllFloorPlansWrapper, Bar, CTA, Text } from "./style";

export default class AllFloorPlans extends AnimateOnActiveComponent {

    static readonly MODELS_AND_FLOOR_PLANS_LINK = "/docs/floor-plan-all.pdf";

    constructor(props: {}) {
        super(props, "AllFloorPlans");
    }

    componentJsx(): JSX.Element {
        return (
            <AllFloorPlansWrapper triggeredAnimation={this.wasAnimatedAlready}>
                <Bar />

                <Text>
                    <h2>Experience the extraordinary</h2>

                    <p>
                        11 different models designed by renowned architects. <br />
                        Exclusive models available upon request. <br />
                        Sizes from 4,700 to 5,500 sqft.
                    </p>
                    <p>
                        Click on the link below to access <br />
                        all the available house models <br />
                        and floor plans.
                    </p>

                    <CTA href={AllFloorPlans.MODELS_AND_FLOOR_PLANS_LINK}>
                        Models and floor plans
                    </CTA>
                </Text>
            </AllFloorPlansWrapper>
        );
    }
}
