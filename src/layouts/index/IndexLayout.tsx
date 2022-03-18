import SliderPage from "@layouts/templates/page/SliderPage"
import Home from "./home/Home"
import YourHome from "./yourhome/YourHome"

export default function IndexLayout(): JSX.Element {
    return (
        <SliderPage>
            <Home />
            <YourHome />
        </SliderPage>
    )
}
