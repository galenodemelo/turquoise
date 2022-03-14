import SliderPage from "@layouts/templates/page/SliderPage"
import Luxury from "./luxury/Luxury"
import Nature from "./nature/Nature"
import Surrounded from "./surrounded/Surrounded"
import YourHome from "./yourhome/YourHome"

export default function Home(): JSX.Element {
    return (
        <SliderPage>
            <Luxury />
            <Nature />
            <Surrounded />
            <YourHome />
        </SliderPage>
    )
}
