import { BackdropVideo } from "@components/Backdrop/BackdropVideo"
import PageMetadata from "@components/PageMetadata"
import FloatingMenu from "@layouts/FloatingMenu"
import IconOfLuxuryAndExclusivity from "@layouts/IconOfLuxuryAndExclusivity"
import VerticalSwipePage from "@layouts/VerticalSwipePage"
import React from "react"

export default class Index extends React.Component {

    render(): JSX.Element {
        return (
            <>
                <PageMetadata />

                <FloatingMenu />

                <VerticalSwipePage>
                    <BackdropVideo autoPlay={true} muted={true} controls={false} loop={true} playsInline={true}>
                        <source src="/video/people-on-kayak-intro.webm" type="video/webm" />
                        <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />
                    </BackdropVideo>

                    <IconOfLuxuryAndExclusivity />
                </VerticalSwipePage>
            </>
        )
    }
}
