import { ButtonClose } from "@components/Carousel/style";
import React from "react";
import { PopoverWrapper } from "./style";

interface Props {
    children: JSX.Element | JSX.Element[]
    isActive: boolean;
    closeFunction: () => void
}

export default class Popover extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <PopoverWrapper isActive={this.props.isActive}>
                {this.props.children}

                <ButtonClose onClick={() => this.props.closeFunction()} />
            </PopoverWrapper>
        )
    }
}
