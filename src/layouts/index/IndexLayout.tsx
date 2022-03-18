import SliderPage from "@layouts/templates/page/SliderPage"
import Home from "./home/Home"
import VideoWithLogo from "./videowithlogo/VideoWithLogo"
import YourHome from "./yourhome/YourHome"

export default function IndexLayout(): JSX.Element {
    return (
        <SliderPage>
            <VideoWithLogo />
            <Home />
            <YourHome />
        </SliderPage>
    )
}
