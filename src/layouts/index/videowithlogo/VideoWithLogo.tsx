import Image from "next/image"
import { useState } from "react"
import styles from "./VideoWithLogo.module.sass"

export default function VideoWithLogo(): JSX.Element {
    const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true)

    return (
        <div className={styles.videoWithLogo}>
            <video autoPlay loop muted playsInline className={styles.background} preload="true" onPlay={() => setIsVideoLoading(false)}>
                <source src="/video/beach-surfer-visualizer.webm" type="video/webm" />
                <source src="/video/beach-surfer-visualizer.mp4" type="video/mp4" />
            </video>

            {!isVideoLoading &&
                <div className={styles.logo}>
                    <Image src="/img/turquoise-logo.gif" layout="fill" loading="eager" alt="Turquoise logo animated" sizes="60vw" />
                </div>
            }
        </div>
    )
}
