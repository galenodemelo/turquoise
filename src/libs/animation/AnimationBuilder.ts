import anime from "animejs"

export type Target = NodeListOf<HTMLElement> | HTMLElement | undefined | null
export type Options = anime.AnimeParams

export default class AnimationBuilder {

    private duration: number = 800

    private animation: object = {}

    private options: anime.AnimeParams = {}

    constructor(private target: NodeList | HTMLElement) {}

    public setDuration(duration: number): AnimationBuilder {
        this.duration = duration
        return this
    }

    public setAnimation(animation: object): AnimationBuilder {
        this.animation = animation
        return this
    }

    public setOptions(options?: Options): AnimationBuilder {
        this.options = options ?? {}
        return this
    }

    public build(): anime.AnimeInstance {
        return anime({
            targets: this.target,
            duration: this.duration,
            loop: false,
            autoplay: false,
            direction: "normal",

            ...this.animation,
            ...this.options
        })
    }
}
