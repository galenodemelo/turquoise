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
        <div className={styles.houseProjectGallery} data-state-active={galleryActive}>
            <div className={styles.button}>
                <Button variant="secondary">
                    House project
                </Button>
            </div>

            <div className={styles.gallery}>
                <button className={styles.close} onClick={() => setGalleryActive(false)}>
                    <Image src="/img/ico/close.green.svg" alt="Close gallery" layout="fill" />
                </button>

                <GallerySwiper>
                    {houseProjectList.map((houseProject, index) => (
                        <>
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
                        </>
                    ))}
                </GallerySwiper>
            </div>
        </div>
    )
}
