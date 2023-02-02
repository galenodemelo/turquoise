import Head from "next/head";
import React from "react";

export default class PageMetadata extends React.Component {

    render(): JSX.Element {
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Turquoise &middot; An icon of luxury and exclusivity</title>
            </Head>
        )
    }
}
