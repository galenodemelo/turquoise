import React from "react";
import { RotatePhoneWrapper } from "./style";

export interface Props {
    forceOrientation: "portrait" | "landscape"
}

export default class RotatePhone extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <RotatePhoneWrapper forceOrientation={this.props.forceOrientation} />
        )
    }
}
