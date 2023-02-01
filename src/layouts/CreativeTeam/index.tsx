import TeamMember from "@components/TeamMember";
import AnimateOnActiveComponent from "@layouts/AnimateOnActiveComponent";
import { SectionHeading } from "@layouts/VerticalSwipePage/Section";
import { CreativeTeamList, CreativeTeamWrapper } from "./style";

export default class CreativeTeam extends AnimateOnActiveComponent {

    constructor(props: {}) {
        super(props, "CreativeTeam");
    }

    componentJsx(): JSX.Element {
        return (
            <CreativeTeamWrapper triggeredAnimation={this.wasAnimatedAlready}>
                <SectionHeading>Creative team</SectionHeading>

                <CreativeTeamList>
                    <TeamMember
                        imagePath="/img/team/ricardo-rodrigues.jpg"
                        name="Ricardo Rodrigues"
                        position="Architect"
                        description="The Turquoise project, for me, is a creative white canvas in the ideal location to build an exclusive community with a free-spirited lifestyle. It's the opportunity to design a calm beach oasis nestled in nature with access to city conveniences."
                    />
                    <TeamMember
                        imagePath="/img/team/mark-tanney.jpg"
                        name="Mark Tanney"
                        position="Architect"
                        description="I am really excited about the vision of Turquoise. Starting with Seaside, virtually all of the neighborhoods along 30A have been conceived with a look back at traditional architecture. Turquoise finally offers me the opportunity to introduce a modern, unique aesthetic on a neighborhood scale along the Gulf Coast."
                    />
                    <TeamMember
                        imagePath="/img/team/russell-johnson.jpg"
                        name="Russell Johnson"
                        position="Architect"
                        description="Most exciting to be working on a project of this magnitude located within one of the most iconic beach locations in the world. Working with this development team is especially rewarding with their forward-looking ideas and design concepts."
                    />
                    <TeamMember
                        imagePath="/img/team/patrick-hodges.jpg"
                        name="Patrick Hodges"
                        position="Masterplanner"
                        description="I'm very excited to be a member of the design team for the Turquoise project. Turquoise will be the first master planned coastal community of its kind in the 30A market. Its distinctive and exclusive because it offers home buyers a community which emphasizes clean, modern architectural design in beautiful natural setting as well as generally larger homesites than are currently available in the luxury home echelon."
                    />
                    <TeamMember
                        imagePath="/img/team/corey-seltenright.jpg"
                        name="Corey Seltenright"
                        position="Landscape designer"
                        description="What excites me about the Turquoise Development is that I get the chance to facilitate the team in setting a new standard for a design niche of high-end modern design that has yet to truly enter the current market in the local region. It’s exciting to be able to use past experience to develop something new and unique for a market that is untapped considering this type of development. I always strive to be unique in personal and professional settings. Turquoise is an opportunity for me to be a part of the creation of something unique and special for local residence. I hope that the design and sense of place catches on to continue similar projects for the region in the near future."
                    />
                </CreativeTeamList>
            </CreativeTeamWrapper>
        )
    }
}
