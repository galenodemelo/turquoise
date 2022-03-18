import Heading, { Props as HeadingProps } from "@components/heading/Heading"
import Image from "next/image"
import styles from "./PhotoWithText.module.sass"

export type Props = {
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
