import styles from "./VideoWithLogo.module.sass"

export default function VideoWithLogo(): JSX.Element {
    return (
        <div className={styles.videoWithLogo}>
            <video autoPlay loop muted playsInline className={styles.background} preload="true">
                <source src="/video/people-on-kayak-intro.webm" type="video/webm" />
                <source src="/video/people-on-kayak-intro.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
        </div>
    )
}
