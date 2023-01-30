import Home from "@layouts/Home";
import React from "react";
import Extra from "./Extra";
import Menu from "./Menu";
import { Header, Logo, LogoWrapper } from "./style";

export interface FloatingMenuProps {
    visible: boolean
    white: boolean
}
export default class FloatingMenu extends React.Component<FloatingMenuProps, {}> {

    constructor(props: FloatingMenuProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Header visible={this.props.visible} white={this.props.white}>
                <Menu />
                <LogoWrapper>
                    <a href={`#${Home.name}`}>
                        <Logo src="/img/turquoise-logo.svg" alt="Turquoise Logo" />
                    </a>
                </LogoWrapper>
                <Extra />
            </Header>
        )
    }
}
