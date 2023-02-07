import Head from "next/head";
import React from "react";

export default class PageMetadata extends React.Component {

    render(): JSX.Element {
        return (
            <Head>
                <link rel="shortcut icon" href="/img/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Turquoise &middot; An icon of luxury and exclusivity</title>

                <meta property="og:image" content="/img/social-media-thumbnail.jpg" />
            </Head>
        )
    }
}
