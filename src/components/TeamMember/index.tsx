import Image from "next/image";
import React from "react";
import { Description, InfoContainer, Name, PhotoContainer, Position, TeamMemberWrapper } from "./style";

interface Props {
    imagePath: string
    name: string
    position: string
    description: string
}

export default class TeamMember extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <TeamMemberWrapper>
                <PhotoContainer>
                    <Image src={this.props.imagePath} layout="fill" alt={`${this.props.name} picture`} />
                </PhotoContainer>
                <InfoContainer>
                    <Name>{this.props.name}</Name>
                    <Position>{this.props.position}</Position>
                    <Description>{this.props.description}</Description>
                </InfoContainer>
            </TeamMemberWrapper>
        )
    }
}
