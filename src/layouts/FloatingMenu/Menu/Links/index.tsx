import Amenities from "@layouts/Amenities";
import Attraction from "@layouts/Attraction";
import Contact from "@layouts/Contact";
import CreativeTeam from "@layouts/CreativeTeam";
import Developers from "@layouts/Developers";
import { AerialView } from "@layouts/FloatingMenu/Extra/style";
import Home from "@layouts/Home";
import Houses from "@layouts/Houses";
import Location from "@layouts/Location";
import Masterplan from "@layouts/Masterplan";
import React from "react";
import { isDesktop } from "react-device-detect";
import { LinkItem, LinkList, LinksClose, LinksWrapper } from "./style";

export interface State {
    open: boolean;
}

export interface LinkItemData {
    href: string;
    label: string;
}

export default class Links extends React.Component<{}, State> {

    readonly linkItemList: Array<LinkItemData> = [
        { href: Home.name, label: "Home" },
        { href: Location.name, label: "Location" },
        { href: Masterplan.name, label: "Masterplan" },
        { href: Houses.name, label: "Houses" },
        { href: Amenities.name, label: "Amenities" },
        { href: Attraction.name, label: "Attraction" },
        { href: CreativeTeam.name, label: "Creative Team" },
        { href: Developers.name, label: "Developers" },
        { href: Contact.name, label: "Contact" }
    ];

    constructor(props: {}) {
        super(props);
        this.state = {
            open: false
        };
    }

    setOpen(open: boolean) {
        this.setState({ open: open });
    }

    render(): JSX.Element {
        return (
            <LinksWrapper open={this.state.open}>
                <LinksClose onClick={() => this.setOpen(false)} />

                <LinkList>
                    {this.linkItemList.map((linkItem: LinkItemData, index: number) => {
                        return (
                            <LinkItem href={`#${linkItem.href}`} onClick={() => this.setOpen(false)} key={index}>
                                {linkItem.label}
                            </LinkItem>
                        );
                    })}

                    {!isDesktop && <AerialView />}
                </LinkList>
            </LinksWrapper>
        );
    }
}
