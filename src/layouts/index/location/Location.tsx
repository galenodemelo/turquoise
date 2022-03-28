import Heading from "@components/heading/Heading"
import styles from "./Location.module.sass"

export default function Location(): JSX.Element {
    return (
        <div className={styles.location}>
            <Heading lineList={[{ text: "Local", color: "primary" }]} />

            <div className={styles.mapContainer}>
                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4869.069786730517!2d-86.23646824768022!3d30.352306525496846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1648425037424!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </div>
    )
}
