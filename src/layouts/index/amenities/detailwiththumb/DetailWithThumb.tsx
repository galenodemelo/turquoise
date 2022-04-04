import Heading from "@components/heading/Heading"
import GallerySwiper from "@components/swiper/gallery/GallerySwiper"
import Textbox from "@layouts/templates/textwithslider/textbox/Textbox"
import TextWithSlider from "@layouts/templates/textwithslider/TextWithSlider"
import Image from "next/image"
import styles from "./DetailWithThumb.module.sass"

export type Props = {
    title: string
    image: string
    description: string
}

export default function DetailWithThumb({ title, image, description }: Props): JSX.Element {
    return (
        <li className={styles.item}>
            <div className={[styles.thumb, "thumbnail"].join(" ")}>
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>

            <div className={styles.lightbox}>
                <TextWithSlider>
                    <Textbox>
                        <Heading lineList={[{text: title}]} />
                        <p>{description}</p>

                        <button className={styles.back}>Back to amenities</button>
                    </Textbox>

                    <GallerySwiper loop={false}>
                        <Image src={image} alt={title} layout="fill" objectFit="cover" />
                    </GallerySwiper>
                </TextWithSlider>
            </div>
        </li>
    )
}
