import Button from "@components/button/Button"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Image from "next/image"
import { useState } from "react"
import styles from "./HouseProjectGallery.module.sass"

export type HouseProjectProps = {
    name: string
    image: string
    title?: string
}

type Props = {
    houseProjectList: Array<HouseProjectProps>
}

export default function HouseProjectGallery({ houseProjectList }: Props): JSX.Element {
    const imagePath: string = `/img/slider/houseproject`
    const [galleryActive, setGalleryActive] = useState<boolean>(false)

    return (
        <div className={styles.houseProjectGallery}>
            <div className={styles.button}>
                <Button variant="secondary" onClick={() => setGalleryActive(true)}>
                    House project
                </Button>
            </div>

            <div className={[styles.gallery, "slide-in-bottom"].join(" ")} data-state-active={galleryActive}>
                <button className={styles.close} onClick={() => setGalleryActive(false)}>
                    <Image src="/img/ico/close.green.svg" alt="Close gallery" layout="fill" />
                </button>

                <GallerySwiper loop={false}>
                    {houseProjectList.map((houseProject, index) => (
                        <div className={styles.item} key={index}>
                            {houseProject.title &&
                                <div className={styles.title}>
                                    {houseProject.title}
                                </div>
                            }

                            <div className={styles.image}>
                                <Image src={`${imagePath}/${houseProject.image}`} alt={`${houseProject.name} project`} layout="fill" objectFit="contain" />
                            </div>

                            <div className={styles.description}>
                                {houseProject.name}
                            </div>
                        </div>
                    ))}
                </GallerySwiper>
            </div>
        </div>
    )
}
