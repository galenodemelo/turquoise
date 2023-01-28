import TeamMember from "@components/TeamMember";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import React from "react";
import { DevelopersList, DevelopersWrapper } from "./style";

export default class Developers extends React.Component {

    render(): JSX.Element {
        return (
            <DevelopersWrapper>
                <SectionHeading>Developers</SectionHeading>

                <DevelopersList>
                    <TeamMember
                        imagePath="/img/team/marco-vazquez.jpg"
                        name="Marcoz Vazques"
                        position="Bravo America Company"
                        description={"To Investors: unparalleled risk reward; To The Neighborhood: setting the standard and raising the bar; To Clients: exclusivity, one of a kind standard of living; Wrap it all, this is \"Turquoise\"."}
                    />
                    <TeamMember
                        imagePath="/img/team/luis-noronha.jpg"
                        name="Luis Noronha"
                        position="Lana Development"
                        description="The Concept of Turquoise was formed when we first arrived in the 30A. The great energy and majestic nature of that place were embracing one of the last large parcels available in that area. The uniqueness and exclusivity of our site was something as incredible and precious as a gem."
                    />
                </DevelopersList>
            </DevelopersWrapper>
        )
    }
}
