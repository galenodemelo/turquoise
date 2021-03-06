import styles from "./Heading.module.sass"

type LineProps = {
    text: string
    color?: "primary" | "secondary" | "black" | "white"
    weight?: "light" | "regular" | "medium" | "bold"
}

export type Props = {
    lineList: LineProps[]
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Heading({ lineList, tag = "h2", size }: Props): JSX.Element {
    const Tag: keyof JSX.IntrinsicElements = tag as keyof JSX.IntrinsicElements

    const headingClassList: string[] = [styles.heading]
    headingClassList.push(styles[`heading--${size ?? tag}`])

    return (
        <Tag className={headingClassList.join(" ")}>
            {lineList.map((line, index) => {
                let lineClassList: string[] = [styles.line]
                lineClassList.push(styles[`line--${line.color ?? "primary"}`])
                lineClassList.push(styles[`line--${line.weight ?? "medium"}`])

                return (
                    <span key={index} className={lineClassList.join(" ")}>
                        {line.text}
                    </span>
                )
            })}
        </Tag>
    )
}
