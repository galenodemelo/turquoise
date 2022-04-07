import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Areas.module.sass"
import GalleryWithThumb, { ThumbProps } from "./gallerywiththumb/GalleryWithThumb"
import galleryWithThumbStyle from "./gallerywiththumb/GalleryWithThumb.module.sass"

export default function Areas(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const imagesList: Array<ThumbProps> = listImages()

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${styles.areas} > .${headingStyles.heading} > *`)) ?? [],
        )
        for (let i = 1; i <= imagesList.length; i++) {
            const delay: number = (i - 1) * 200
            console.log(`.${styles.member}:nth-of-type(${i}) .${headingStyles.heading} > *`)
            animationList = animationList.concat(
                AnimationLib.scaleIn(slideElement.current?.querySelectorAll(`.${galleryWithThumbStyle.item}:nth-of-type(${i}) img`), { delay }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${galleryWithThumbStyle.item}:nth-of-type(${i})`), { delay: delay + 600 }) ?? []
            )
        }

        new AnimationTriggerBuilder()
            .setElementToBeObserved(slideElement)
            .addAnimationFunction(() => {
                setTimeout(() => {
                    animationList.forEach((animation: anime.AnimeInstance) => animation.play())
                }, 800)
            })
            .build()
    }, [slideElement])

    return (
        <div className={styles.areas} ref={slideElement}>
            <Heading lineList={[ { text: "Attractions", color: "white" } ]} />

            <div className={styles.content}>
                <GalleryWithThumb imageList={imagesList} />
            </div>
        </div>
    )
}

function listImages(): Array<ThumbProps> {
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
