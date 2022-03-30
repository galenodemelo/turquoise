import Head from "next/head"

type Props = {
    title?: string
    description?: string
    thumb?: string
}

export default function PageMetadata({ title, description, thumb }: Props): JSX.Element {
    const defaultTitle: string = "Turquoise - An icon of luxury and exclusivity"
    const defaultDescription: string = "Toss your troubles away as you float on the bay under the glorious blue sky and over translucent waters."
    const defaultThumb: string = "/img/social-media-thumbnail.jpg"
    const favicon: string = "/img/favicon.png"

    return (
        <Head>
            <title>{title ?? defaultTitle}</title>
            <meta property="og:description" content={description ?? defaultDescription} />
            <meta property="og:image" content={thumb ?? defaultThumb} />
            <link rel="icon" href={favicon} />
        </Head>
    )
}
