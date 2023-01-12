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
                    <LinkItem>Home</LinkItem>
                    <LinkItem>Location</LinkItem>
                    <LinkItem>Masterplan</LinkItem>
                    <LinkItem>Houses</LinkItem>
                    <LinkItem>Amenities</LinkItem>
                    <LinkItem>Attraction</LinkItem>
                    <LinkItem>Creative team</LinkItem>
                    <LinkItem>Developers</LinkItem>
                    <LinkItem>Contact</LinkItem>
                </LinkList>
            </LinksWrapper>
        )
    }
}
