import Image from "next/image"
import styles from "./Icon.module.sass"

type Props = {
    alt: string
    filename: string,
    size?: string
}

export default function Icon({ alt, filename, size = "1x" }: Props): JSX.Element {
    return (
        <div className={[styles.icon, styles[`icon-${size}`]].join(" ")}>
            <Image
                src={`/img/ico/${filename}`}
                layout="fill"
                sizes="120px"
                alt={alt} />
        </div>
    )
}
