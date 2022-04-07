import anime from "animejs"
import type { Options, Target } from "./AnimationBuilder"
import AnimationBuilder from "./AnimationBuilder"

export default class AnimationLib {

    public static fadeInLetters(target: Target, options?: Options): anime.AnimeInstance[] | null {
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

}
