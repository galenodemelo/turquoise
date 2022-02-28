import Image from "next/image"
import styles from "./Logo.module.sass"

export default function Logo(): JSX.Element {
    return (
        <div className={styles.logo}>
            <Image
                src="/img/turquoise-logo.svg"
                layout="fill"
                priority={true}
                alt="Turquoise green logo" />
        </div>
    )
}
