import SliderPage from "@layouts/templates/page/SliderPage"
import Amenities from "./amenities/Amenities"
import Areas from "./areas/Areas"
import Contact from "./contact/Contact"
import CreativeTeam from "./creativeteam/CreativeTeam"
import Developers from "./developers/Developers"
import Home from "./home/Home"
import Location from "./location/Location"
import VideoWithLogo from "./videowithlogo/VideoWithLogo"
import YourHome from "./yourhome/YourHome"

export default function IndexLayout(): JSX.Element {
    return (
        <SliderPage>
            <VideoWithLogo />
            <Home />
            <YourHome />
            <CreativeTeam />
            <Developers />
            <Amenities />
            <Areas />
            <Location />
            <Contact />
        </SliderPage>
    )
}
