import React, { RefObject } from "react"

export default class AnimationTriggerBuilder {

    private animationFunction: () => void = () => {}
    private elementToBeObserved: RefObject<any> = React.createRef()
    private observer: MutationObserver = new MutationObserver(() => {})

    public setElementToBeObserved(element: RefObject<any>): AnimationTriggerBuilder {
        this.elementToBeObserved = element
        return this
    }

    public addAnimationFunction(animationFunction: () => void): AnimationTriggerBuilder {
        this.animationFunction = animationFunction
        return this
    }

    public build(): AnimationTriggerBuilder {
        this.addObserver()
        return this
    }

    private addObserver(): void {
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type !== "attributes" || mutation.attributeName !== "data-state-active") return

                const isActive = this.elementToBeObserved.current.getAttribute("data-state-active") === "true"
                if (isActive) {
                    this.animationFunction()
                    this.observer.disconnect()
                }
            })
        })

        this.observer.observe(this.elementToBeObserved.current as Node, { attributes: true })
    }
}
