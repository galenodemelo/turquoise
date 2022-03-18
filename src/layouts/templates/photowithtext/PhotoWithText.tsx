import Heading, { Props as HeadingProps } from "@components/heading/Heading"
import Image from "next/image"
import styles from "./PhotoWithText.module.sass"

type Props = {
    image: string
    heading: HeadingProps
    text: string
    variant: "vertical" | "horizontal"
}

export default function PhotoWithText({ image, heading, text, variant }: Props): JSX.Element {

    return (
        <div className={[styles.photoWithText, styles[`photoWithText--${variant}`]].join(" ")}>
            <div className={styles.photo}>
                <Image src={image} layout="fill" objectFit="cover" />
            </div>

            <Heading {...heading} />
            <p className={styles.paragraph}>{text}</p>
        </div>
    )
}

export function buildPhotoWithTextParams(photo: string, name: string, description: string, position?: string): Props {
    const params: Props = {
        image: `/img/members/${photo}`,
        heading: {
            lineList: [],
            size: "h3"
        },
        text: description,
        variant: "vertical"
    }

    params.heading.lineList.push({ text: name, color: "black", weight: "bold" })
    if (position) params.heading.lineList.push({ text: position, color: "black", weight: "light" })

    return params
}
