import Heading from "@components/heading/Heading"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"
import { useState } from "react"
import styles from "./DetailWithThumb.module.sass"

export type Props = {
    title: string
    image: string
    description: string
}

export default function DetailWithThumb({ title, image, description }: Props): JSX.Element {
    const [lightboxActive, setLightboxActive] = useState<boolean>(false)

    return (
        <li className={styles.item}>
            <div className={[styles.thumb, "thumbnail"].join(" ")} onClick={() => setLightboxActive(true)}>
                <Image src={image} alt={title} layout="fill" objectFit="cover" sizes="40vw" loading="eager" />
            </div>

            <div className={[styles.lightbox, "slide-in-bottom"].join(" ")} data-state-active={lightboxActive}>
                <TextWithSlider>
                    <Textbox>
                        <Heading lineList={[{text: title}]} />
                        <p>{description}</p>

                        <button className={styles.back} onClick={() => setLightboxActive(false)}>Back to amenities</button>
                    </Textbox>

                    <GallerySwiper loop={false}>
                        <Image src={image} alt={title} layout="fill" objectFit="cover" sizes="30vw" loading="eager" />
                    </GallerySwiper>
                </TextWithSlider>
            </div>
        </li>
    )
}
