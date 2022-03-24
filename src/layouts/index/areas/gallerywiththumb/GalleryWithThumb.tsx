import Image from "next/image"
import styles from "./GalleryWithThumb.module.sass"

export type ThumbProps = {
    url: string
    thumbUrl: string
    description: string
}

type Props = {
    imageList: ThumbProps[]
}

export default function GalleryWithThumb({ imageList }: Props): JSX.Element {
    return (
        <>
            <ul className={styles.thumbList}>
                {imageList.map((image, index) => (
                    <li key={index} className={styles.item}>
                        <Image src={image.thumbUrl} alt={image.description} layout="fill" objectFit="cover" />
                    </li>
                ))}
            </ul>

        </>
    )
}
