import React from "react";
import Extra from "./Extra";
import Menu from "./Menu";
import { Header, Logo } from "./style";

export default class FloatingMenu extends React.Component {

    render(): JSX.Element {
        return (
            <Header>
                <Menu />
                <Logo src="/img/turquoise-logo.svg" alt="Turquoise Logo" white={true} />
                <Extra />
            </Header>
        )
    }
}
