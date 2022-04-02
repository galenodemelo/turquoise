import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Image from "next/image"
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

    return (
        <div className={styles.houseProject}>
            <GallerySwiper>
                {houseProjectList.map((houseProject, index) => (
                    <div key={index}>
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
    )
}
