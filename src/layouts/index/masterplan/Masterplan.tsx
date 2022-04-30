import Button from "@components/button/Button"
import Heading from "@components/heading/Heading"
import Image from "next/image"
import styles from "./Masterplan.module.sass"

export default function Masterplan(): JSX.Element {
    return (
        <div className={[styles.masterplan, "centered-slide"].join(" ")}>
            <Heading lineList={[ {text: "Masterplan", color: "white"} ]} />

            <div className={styles.cover}>
                <Image src="/img/masterplan.jpg" layout="fill" objectFit="cover" />
            </div>

            <nav className={styles.navigation}>
                <Button icon="arrow" href="https://player.theviewvr.com/?locationId=1298" target="_blank">
                    <b>Start</b> tour
                </Button>
                <Button icon="pdf-download" href="javascript: alert('Dummy alert. Awaiting PDF final version')"></Button>
            </nav>
        </div>
    )
}
