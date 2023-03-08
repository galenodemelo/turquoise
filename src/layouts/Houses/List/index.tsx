import { DarkGreenMask, FullSizeCenteredImage, MaskTitle } from "@styles/globals";
import React from "react";
import { Designer } from "../Details";
import { HousesListItem, HousesListWrapper } from "./style";

interface Props {
    onItemClick: (designer?: Designer) => void;
}

interface HousesListItem {
    name: string;
    designer: Designer;
    designerName: string;
    imagePath: string;
}

export default class HousesList extends React.Component<Props, {}> {

    readonly housesListItem: Array<HousesListItem> = [
        { name: "Opal 1", designer: "tanney", designerName: "Tanney", imagePath: "/img/carousel/houses/tanneys-design-1.jpg" },
        { name: "Amber 1", designer: "russell", designerName: "Russell", imagePath: "/img/carousel/houses/russells-design-1.jpg" },
        { name: "Malachite 1", designer: "ricardo", designerName: "Ricardo", imagePath: "/img/carousel/houses/ricardos-design-1.jpg" }
    ];

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <HousesListWrapper>
                {this.housesListItem.map((item, index) => {
                    return (
                        <HousesListItem key={index} onClick={() => this.props.onItemClick(item.designer)}>
                            <FullSizeCenteredImage src={item.imagePath} alt={`House facade by ${item.name}`} />

                            <DarkGreenMask />
                            <MaskTitle scale={1.3}>
                                <small>{item.name}</small>
                                {`${item.designerName}'s design`}
                            </MaskTitle>
                        </HousesListItem>
                    );
                })}
            </HousesListWrapper>
        );
    }
}
