import GalleryWithThumb, { ThumbProps } from "./gallerywiththumb/GalleryWithThumb"
import Heading from "@components/heading/Heading"
import styles from "./Areas.module.sass"

export default function Areas(): JSX.Element {
    return (
        <div className={styles.areas}>
            <Heading lineList={[ { text: "Areas", color: "white" } ]} />

            <div className={styles.content}>
                <GalleryWithThumb imageList={getImageList()} />
            </div>
        </div>
    )
}

function getImageList(): ThumbProps[] {
    const sliderPath: string = "/img/slider/areas"

    return [
        {
            url: `${sliderPath}/santa-rosa-beach.jpg`,
            thumbUrl: `${sliderPath}/santa-rosa-beach-thumb.jpg`,
            description: "Santa Rosa Beach"
        },
        {
            url: `${sliderPath}/highway-30a.jpg`,
            thumbUrl: `${sliderPath}/highway-30a-thumb.jpg`,
            description: "Highway 30A"
        },
        {
            url: `${sliderPath}/golf-club.jpg`,
            thumbUrl: `${sliderPath}/golf-club-thumb.jpg`,
            description: "Golf Club"
        },
        {
            url: `${sliderPath}/dunes.jpg`,
            thumbUrl: `${sliderPath}/dunes-thumb.jpg`,
            description: "Dunes"
        },
        {
            url: `${sliderPath}/santa-rosa-beach-sea.jpg`,
            thumbUrl: `${sliderPath}/santa-rosa-beach-sea-thumb.jpg`,
            description: "Santa Rosa Beach"
        },
        {
            url: `${sliderPath}/fox-lake.jpg`,
            thumbUrl: `${sliderPath}/fox-lake-thumb.jpg`,
            description: "Fox Lake"
        }
    ]
}
