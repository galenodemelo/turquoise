import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Image from "next/image"
import { useState } from "react"
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
    const [galleryActive, setGalleryActive] = useState<boolean>(false)
    const [galleryIndex, setGalleryIndex] = useState<number>(0)

    function showGallery(index: number): void {
        setGalleryActive(true)
        setGalleryIndex(index)
    }

    return (
        <>
            <ul className={styles.thumbList}>
                {imageList.map((image, index) => (
                    <li key={index} className={[styles.item, "thumbnail"].join(" ")} onClick={() => showGallery(index)}>
                        <Image src={image.thumbUrl} alt={image.description} layout="fill" objectFit="cover" />
                    </li>
                ))}
            </ul>

            <div className={[styles.gallery, "slide-in-bottom"].join(" ")} data-state-active={galleryActive}>
                <button className={styles.close} onClick={() => setGalleryActive(false)}>
                    <Image src="/img/ico/close.svg" alt="Close gallery" layout="fill" />
                </button>

                <GallerySwiper initialSlide={galleryIndex}>
                    {imageList.map((image, index) => (
                        <div key={index} className={styles.galleryItem}>
                            <Image src={image.url} alt={image.description} layout="fill" objectFit="cover" loading="eager" />

                            <div className={styles.description}>
                                {image.description}
                            </div>
                        </div>
                    ))}
                </GallerySwiper>
            </div>
        </>
    )
}
