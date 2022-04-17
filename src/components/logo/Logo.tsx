import VideoWithLogo from "@layouts/index/videowithlogo/VideoWithLogo"
import Image from "next/image"
import styles from "./Logo.module.sass"

export default function Logo(): JSX.Element {
    return (
        <a href={`#${VideoWithLogo.name}`} className={styles.logo}>
            <Image
                src="/img/turquoise-logo.svg"
                layout="fill"
                priority={true}
                sizes="300px"
                alt="Turquoise green logo" />
        </a>
    )
}
