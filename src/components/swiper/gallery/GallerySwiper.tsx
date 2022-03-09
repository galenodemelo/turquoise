type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function GallerySwiper({ children }: Props): JSX.Element {
    const slideList = Array.isArray(children) ? children : [children]

}
