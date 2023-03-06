import Image from "next/image";
import React from "react";
import { Icon, Instruction, RotatePhoneWrapper } from "./style";

export type Orientation = "portrait" | "landscape"

export interface Props {
    forceOrientation: Orientation;
}

export default class RotatePhone extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <RotatePhoneWrapper forceOrientation={this.props.forceOrientation}>
                <Icon>
                    <Image src="/img/ico/rotate-phone.svg" width={80} height={80} layout="fixed" alt="Phone rotating icon" />
                </Icon>
                <Instruction>
                    Rotate the phone
                </Instruction>
            </RotatePhoneWrapper>
        );
    }
}
