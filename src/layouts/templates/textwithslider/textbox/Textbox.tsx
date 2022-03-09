import styles from "./Textbox.module.sass"

type Props = {
    children: JSX.Element[]
}

export default function Textbox({ children }: Props): JSX.Element {
    return (
        <div className={styles.textbox}>
            {children}
        </div>
    )
}
