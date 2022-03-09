import styles from "./Heading.module.sass"

type LineProps = {
    text: string,
    color?: "primary" | "secondary",
    weight?: "light" | "medium"
}

type Props = {
    lineList: LineProps[],
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Heading({ lineList, tag = "h2", size }: Props): JSX.Element {
    const Tag: keyof JSX.IntrinsicElements = tag as keyof JSX.IntrinsicElements
}
