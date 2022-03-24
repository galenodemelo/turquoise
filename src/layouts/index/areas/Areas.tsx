import Heading from "@components/heading/Heading"
import styles from "./Areas.module.sass"

export default function Areas(): JSX.Element {
    return (
        <div className={styles.areas}>
            <Heading lineList={[ { text: "Areas", color: "white" } ]} />

            <div className={styles.content}>
            </div>
        </div>
    )
}
