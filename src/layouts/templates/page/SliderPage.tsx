import PageSwiper from "@components/swiper/page/PageSwiper"
import Header from "../header/Header"
import styles from "./SliderPage.module.sass"

type Props = {
    children: React.ReactNode[]
}

export default function SliderPage({ children }: Props) {
    return (
        <div className={styles.sliderPage}>
            <Header />

            <PageSwiper>
                {children}
            </PageSwiper>
        </div>
    )
}
