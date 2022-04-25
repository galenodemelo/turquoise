import styles from "./Map.module.sass"

export default function Map(): JSX.Element {
    const mapUrl: string = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27542.09351817812!2d-86.24959209533729!3d30.357722000000017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8893e26aa5008597%3A0x86d9fbc48509ec22!2s157%20Fairway%20Dr%2C%20Santa%20Rosa%20Beach%2C%20FL%2032459%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1650927608384!5m2!1spt-BR!2sbr"

    return (
        <iframe
            className={styles.map}
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    )
}
