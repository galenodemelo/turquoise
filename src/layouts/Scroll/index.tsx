import React from "react";
import { Icon, ScrollTipWrapper, Text } from "./style";

export interface ScrollTipProps {
    visible: boolean,
    white: boolean;
}

export default class ScrollTip extends React.Component<ScrollTipProps, {}> {

    constructor(props: ScrollTipProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <ScrollTipWrapper visible={this.props.visible} white={this.props.white}>
                <Icon src="/img/ico/scroll.svg" alt="Arrow icon" role="decorative" />
                <Text>Scroll</Text>
            </ScrollTipWrapper>
        )
    }
}
