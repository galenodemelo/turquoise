import React from "react";
import Extra from "./Extra";
import Menu from "./Menu";
import { Header, Logo, LogoWrapper } from "./style";

export default class FloatingMenu extends React.Component {

    render(): JSX.Element {
        return (
            <Header>
                <Menu />
                <LogoWrapper>
                    <Logo src="/img/turquoise-logo.svg" alt="Turquoise Logo" white={true} />
                </LogoWrapper>
                <Extra />
            </Header>
        )
    }
}
