import VerticalSwipePageContext from "src/libs/VerticalSwipePageContext";

export default class AnimateOnActiveComponentDecorator {

    public static decorate(componentName: string, callback: (isActive: boolean) => JSX.Element): JSX.Element {
        return (
            <VerticalSwipePageContext.Consumer>
                {({ slideName }) => callback(componentName === slideName)}
            </VerticalSwipePageContext.Consumer>
        )
    }
}
