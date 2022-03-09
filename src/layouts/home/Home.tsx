import SliderPage from "@layouts/templates/page/SliderPage"
import Luxury from "./luxury/Luxury"
import Nature from "./nature/Nature"

export default function Home(): JSX.Element {
    return (
        <SliderPage>
            <Luxury />
            <Nature />
        </SliderPage>
    )
}
