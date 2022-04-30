import SliderPage from "@layouts/templates/page/SliderPage"
import Contact from "./contact/Contact"
import VideoWithLogo from "./videowithlogo/VideoWithLogo"

export default function IndexLayout(): JSX.Element {
    return (
        <SliderPage>
            <VideoWithLogo />
            <Contact />
        </SliderPage>
    )
}
