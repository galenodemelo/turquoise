import Heading from "@components/heading/Heading"
import Image from "next/image"
import styles from "./Location.module.sass"
import Map from "./map/Map"

export default function Location(): JSX.Element {
    return (
        <div className={styles.location}>
            <Heading lineList={[{ text: "Local", color: "primary" }]} />

            <div className={styles.mapContainer}>
                <Map />

                <div className={styles.thumb}>
                    <Image src="/img/map/location-thumb.jpg" layout="fill" objectFit="cover" alt="Overview of Florida location" />
                </div>
            </div>
        </div>
    )
}
