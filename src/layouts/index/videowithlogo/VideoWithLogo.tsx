import Image from "next/image"
import styles from "./VideoWithLogo.module.sass"

export default function VideoWithLogo(): JSX.Element {
    return (
        <div className={styles.videoWithLogo}>
            <video autoPlay loop muted playsInline className={styles.background}>
                <source src="/video/beach-surfer-visualizer.webm" type="video/webm" />
                <source src="/video/beach-surfer-visualizer.mp4" type="video/mp4" />
            </video>

            <div className={styles.logo}>
                <Image src="/img/turquoise-logo.gif" layout="fill" loading="eager" />
            </div>
        </div>
    )
}
