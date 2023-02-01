import React from "react";
import VerticalSwipePageContext from "src/libs/VerticalSwipePageContext";

export interface AnimateOnActiveComponentProps {
    triggeredAnimation: boolean
}

export default abstract class AnimateOnActiveComponent<P = {}, S = {}> extends React.Component<P, S> {

    protected wasAnimatedAlready = false

    constructor(props: P, readonly componentName: string) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <VerticalSwipePageContext.Consumer>
                {({ slideName }) => {
                    if (!this.wasAnimatedAlready && slideName === this.componentName) this.wasAnimatedAlready = true

                    return this.componentJsx()
                }}
            </VerticalSwipePageContext.Consumer>
        )
    }

    abstract componentJsx(): JSX.Element
}
