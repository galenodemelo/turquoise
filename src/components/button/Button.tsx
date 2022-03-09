type Props = {
    children: string | JSX.Element | JSX.Element[]
    href?: string
    variant?: "primary" | "secondary"
}

export default function Button({ children, href, variant = "primary" }: Props): JSX.Element {
    const Tag = href ? "a" : "button"

    return (
    )
}
