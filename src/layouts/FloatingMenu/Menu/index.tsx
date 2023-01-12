import React from "react";
import Links from "./Links";
import { NavButtonIcon, NavButtonLabel, NavButtonWrapper } from "./style";

export default class Menu extends React.Component<{}> {

    linksRef = React.createRef<Links>()

    constructor(props: {}) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <>
                <NavButtonWrapper onClick={() => this.linksRef.current!.setOpen(true)}>
                    <NavButtonIcon>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                    </NavButtonIcon>
                    <NavButtonLabel>
                        Menu
                    </NavButtonLabel>
                </NavButtonWrapper>

                <Links ref={this.linksRef} />
            </>
        )
    }
}
