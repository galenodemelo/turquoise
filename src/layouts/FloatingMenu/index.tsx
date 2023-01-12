import React from "react";
import { Header, Logo } from "./style";

export default class FloatingMenu extends React.Component {

    render(): JSX.Element {
        return (
            <Header>
                <Logo src="/img/turquoise-logo.svg" alt="Turquoise Logo" white={true} />
            </Header>
        )
    }
}
