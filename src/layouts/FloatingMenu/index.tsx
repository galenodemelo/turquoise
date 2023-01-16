import React from "react";
import Extra from "./Extra";
import Menu from "./Menu";
import { Header, Logo, LogoWrapper } from "./style";

interface Props {
    visible: boolean
}
export default class FloatingMenu extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Header visible={this.props.visible}>
                <Menu />
                <LogoWrapper>
                    <Logo src="/img/turquoise-logo.svg" alt="Turquoise Logo" white={true} />
                </LogoWrapper>
                <Extra />
            </Header>
        )
    }
}
