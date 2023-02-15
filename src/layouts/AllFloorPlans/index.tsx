import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { AllFloorPlansWrapper, Bar, CTA, Text } from "./style";

export default class AllFloorPlans extends AnimateOnActiveComponent {

    constructor(props: {}) {
        super(props, "AllFloorPlans");
    }

    componentJsx(): JSX.Element {
        return (
            <AllFloorPlansWrapper triggeredAnimation={this.wasAnimatedAlready}>
                <Bar />

                <Text>
                    <p>
                        Click on the link below to access all the available house models and floor plans.
                    </p>

                    <CTA href="https://www.dropbox.com/s/nghmqa5hrs8w68v/Turquouise%20Models%20%26%20Floor%20Plans.pdf?dl=0">
                        Models and floor plans
                    </CTA>
                </Text>
            </AllFloorPlansWrapper>
        )
    }
}
