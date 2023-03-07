import { DarkGreenMask, MaskTitle } from "@styles/globals";
import Image from "next/image";
import React from "react";
import { HousesListItem, HousesListWrapper } from "./style";

interface Props {
    onItemClick: () => void;
}

interface HousesListItem {
    name: string;
    designer: string;
    imagePath: string;
}

export default class HousesList extends React.Component<Props, {}> {

    readonly housesListItem: Array<HousesListItem> = [
        { name: "Opal 1", designer: "Tanney", imagePath: "/img/carousel/houses/tanneys-design-1.jpg" },
        { name: "Amber 1", designer: "Russell", imagePath: "/img/carousel/houses/russells-design-1.jpg" },
        { name: "Malachite 1", designer: "Ricardo", imagePath: "/img/carousel/houses/tanneys-design-1.jpg" }
    ];

    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <HousesListWrapper>
                {this.housesListItem.map((item, index) => {
                    return (
                        <HousesListItem key={index} onClick={() => this.props.onItemClick()}>
                            <Image src={item.imagePath} layout="fill" alt="House facade" objectFit="cover" />
                            <DarkGreenMask />
                            <MaskTitle scale={1.3}>
                                <small>{item.name}</small>
                                {`${item.designer}'s design`}
                            </MaskTitle>
                        </HousesListItem>
                    );
                })}
            </HousesListWrapper>
        );
    }
}
