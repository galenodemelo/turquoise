import Amenities from "@layouts/Amenities";
import Attraction from "@layouts/Attraction";
import Contact from "@layouts/Contact";
import CreativeTeam from "@layouts/CreativeTeam";
import Developers from "@layouts/Developers";
import Houses from "@layouts/Houses";
import Intro from "@layouts/Intro";
import Masterplan from "@layouts/Masterplan";
import React from "react";
import { LinkItem, LinkList, LinksClose, LinksWrapper } from "./style";

export interface State {
    open: boolean
}

export default class Links extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            open: false
        }
    }

    setOpen(open: boolean) {
        this.setState({ open: open })
    }

    render(): JSX.Element {
        return (
            <LinksWrapper open={this.state.open}>
                <LinksClose onClick={() => this.setOpen(false)} />

                <LinkList>
                    <LinkItem href={`#${Intro.name}`}>Home</LinkItem>
                    <LinkItem href={`#${Location.name}`}>Location</LinkItem>
                    <LinkItem href={`#${Masterplan.name}`}>Masterplan</LinkItem>
                    <LinkItem href={`#${Houses.name}`}>Houses</LinkItem>
                    <LinkItem href={`#${Amenities.name}`}>Amenities</LinkItem>
                    <LinkItem href={`#${Attraction.name}`}>Attraction</LinkItem>
                    <LinkItem href={`#${CreativeTeam.name}`}>Creative team</LinkItem>
                    <LinkItem href={`#${Developers.name}`}>Developers</LinkItem>
                    <LinkItem href={`#${Contact.name}`}>Contact</LinkItem>
                </LinkList>
            </LinksWrapper>
        )
    }
}
