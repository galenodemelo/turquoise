import SliderPage from "@layouts/templates/page/SliderPage"
import CreativeTeam from "./creativeteam/CreativeTeam"
import Home from "./home/Home"
import VideoWithLogo from "./videowithlogo/VideoWithLogo"
import YourHome from "./yourhome/YourHome"

export default function IndexLayout(): JSX.Element {
    return (
        <SliderPage>
            <VideoWithLogo />
            <Home />
            <YourHome />
            <CreativeTeam />
        </SliderPage>
    )
}
