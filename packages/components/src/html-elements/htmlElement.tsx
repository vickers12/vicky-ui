import clsx from "clsx";
import { Ref, type JSX, FC, ComponentRef } from "react";

import styles from "./htmlElement.module.css";

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
    ref?: Ref<ComponentRef<T>>;
};

export const GlobalHtmlElementCssSelector = "vui-HtmlElement";
export const GlobalHtmlElementSpecificCssSelector = (elementType: string) =>
    `${GlobalHtmlElementCssSelector}-${elementType}`;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(
    elementType: T
): FC<HtmlElementProps<T>> {
    const HtmlElementComponent: FC<HtmlElementProps<T>> = ({ ref, ...props }) => {
        const { className, ...restProps } = props;
        const As = elementType;
        const classNames = clsx(
            className,
            styles["vui-HtmlElement"],
            GlobalHtmlElementCssSelector,
            GlobalHtmlElementSpecificCssSelector(elementType)
        );

        return (
            // It's too hard for typescript, a generic elementType, with generic props.
            // Basically, the interface is HTMLProps of the elementType + styled system props.
            // useStyledSystem removes the styled system props, so what is remaining is valid for the elementType.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <As ref={ref} className={classNames} {...restProps} />
        );
    };
    return HtmlElementComponent;
}
