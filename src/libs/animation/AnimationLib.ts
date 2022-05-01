import anime from "animejs"
import type { Options, Target } from "./AnimationBuilder"
import AnimationBuilder from "./AnimationBuilder"

export default class AnimationLib {

    public static fadeIn(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(600)
            .setAnimation({
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .build()
    }

    public static fadeInBottom(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(800)
            .setAnimation({
                translateY: ["50%", "0%"],
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .build()
    }

    public static popInFromDown(target: NodeListOf<HTMLElement> | undefined, options?: { delay: number }): anime.AnimeInstance[] | null {
        if (!target) return null

        let lastTargetCount: number = 0
        let animationList: anime.AnimeInstance[] = []
        target.forEach((element: HTMLElement, index: number) => {
            let realTarget: Target
            if (element.dataset.contentType === "text") {
                element.innerHTML = element.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") ?? ""
                realTarget = element.querySelectorAll(".letter")
            } else {
                element.classList.add("letter")
                realTarget = element
            }

            const animation: anime.AnimeInstance = new AnimationBuilder(realTarget)
                .setDuration(1000)
                .setAnimation({
                    translateY: ["2.5em", 0],
                    translateZ: 0,
                    delay: (element: any, i: number) => 50 * (i + 1 + ++lastTargetCount) + (options?.delay ?? 0),
                })
                .build()

            animationList.push(animation)
        })

        return animationList
    }

    public static fadeInLetters(target: NodeListOf<HTMLElement> | undefined, options?: Options): anime.AnimeInstance[] | null {
        if (!target) return null

        let lastTargetCount: number = 0
        let animationList: anime.AnimeInstance[] = []
        target.forEach((element: HTMLElement, index: number) => {
            element.innerHTML = element.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") ?? ""

            const newTarget: Target = element.querySelectorAll(".letter")
            const animation: anime.AnimeInstance = new AnimationBuilder(newTarget)
                .setOptions(options)
                .setDuration(600)
                .setAnimation({
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    delay: (element: any, i: number) => 35 * (i + 1 + lastTargetCount)
                })
                .build()

            animationList.push(animation)

            lastTargetCount += newTarget.length
        })

        return animationList
    }

    public static scaleIn(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(1000)
            .setAnimation({
                scale: [1.2, 1],
                easing: "easeInOutQuad"
            })
            .build()
    }

    public static slideInLeft(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(1400)
            .setAnimation({
                left: ["-200px", "0px"],
                easing: "easeInOutQuad"
            })
            .build()
    }

    public static slideInBottom(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(1400)
            .setAnimation({
                translateY: ["200%", "0%"],
                easing: "easeInOutQuad"
            })
            .build()
    }

    public static widthIn(target: Target, options?: Options): anime.AnimeInstance | null {
        if (!target) return null

        return new AnimationBuilder(target)
            .setOptions(options)
            .setDuration(1000)
            .setAnimation({
                maxWidth: [0, "100%"],
                easing: "easeInOutQuad"
            })
            .build()
    }
}
