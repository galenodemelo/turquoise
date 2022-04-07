import Heading from "@components/heading/Heading"
import headingStyles from "@components/heading/Heading.module.sass"
import { RefObject, useEffect, useRef } from "react"
import AnimationLib from "src/libs/animation/AnimationLib"
import AnimationTriggerBuilder from "src/libs/animation/AnimationTriggerBuilder"
import styles from "./Amenities.module.sass"
import DetailWithThumb, { Props as DetailProps } from "./detailwiththumb/DetailWithThumb"
import detailWithThumbStyles from "./detailwiththumb/DetailWithThumb.module.sass"

export default function Amenities(): JSX.Element {
    const slideElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const amenitiesList: Array<DetailProps> = listAmenities()

    useEffect(() => {
        let animationList: anime.AnimeInstance[] = []
        animationList = animationList.concat(
            AnimationLib.fadeInLetters(slideElement.current?.querySelectorAll(`.${styles.amenities} > .${headingStyles.heading} > *`)) ?? [],
        )
        for (let i = 1; i <= amenitiesList.length; i++) {
            const delay: number = (i - 1) * 400
            animationList = animationList.concat(
                AnimationLib.scaleIn(slideElement.current?.querySelectorAll(`.${detailWithThumbStyles.item}:nth-of-type(${i}) img`), { delay }) ?? [],
                AnimationLib.fadeIn(slideElement.current?.querySelectorAll(`.${detailWithThumbStyles.item}:nth-of-type(${i})`), { delay: delay + 600 }) ?? []
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
        <div className={[styles.amenities, "centered-slide"].join(" ")} ref={slideElement}>
            <Heading lineList={[{ text: "Amenities", color: "primary", weight: "bold" }]} />

            <ul className={styles.gallery}>
                {amenitiesList.map((amenity, index) => (
                    <DetailWithThumb key={index} {...amenity} />
                ))}
            </ul>
        </div>
    )
}

function listAmenities(): Array<DetailProps> {
    const amenitiesImagePath: string = "/img/amenities"

    return [
        {
            title: "Beach",
            image: `${amenitiesImagePath}/beach.jpg`,
            description: "Santa Rosa boasts some of the most iconic and breathtaking beaches in the world. The translucent waters sweep over white powdery sand under a clear blue sky. The temperature is ideal as a slight breeze comes in off the water. You have found your home at last."
        },
        {
            title: "Pickleball",
            image: `${amenitiesImagePath}/pickleball.jpg`,
            description: "If you're feeling active, how about grabbing some friends and hitting up one of our two community pickleball courts? It's a fantastic way to stay in shape while soaking up those rays. Of course, there's no better feeling than working up a sweat and then taking a dip in the ocean."
        },
        {
            title: "Walking trails",
            image: `${amenitiesImagePath}/walking-trails.jpg`,
            description: "How about a stroll through the luscious greens on our walking trails? Breathe in the country fresh air, while the tree canopies provide plenty of shade from the sun. Our path stretches across around 50,000 sq.ft., giving plenty of distance for a casual outing or a more lengthy exercise routine."
        },
        {
            title: "Fire pits",
            image: `${amenitiesImagePath}/fire-pits.jpg`,
            description: "There's nothing quite as relaxing as winding down your day in front of one of our three community fire pits. The stars above and the warm glow from the flickering flames are the perfect way to wrap up your day. So, what's your plan for tomorrow?"
        }
    ]
}
