import clsx from "clsx";
import { Ref, type JSX, FC } from "react";
import { StyledSystemProps, useStyledSystem } from "../utils/index.ts";

import styles from "./htmlElement.module.css";

type ElementRef<T extends keyof JSX.IntrinsicElements> = T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : never;

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledSystemProps &
    Omit<JSX.IntrinsicElements[T], "ref" | "className" | "style"> & {
        className?: string;
        ref?: Ref<ElementRef<T>>;
    };

export const GlobalHtmlElementCssSelector = "vui-HtmlElement";
export const GlobalHtmlElementSpecificCssSelector = (elementType: string) =>
    `${GlobalHtmlElementCssSelector}-${elementType}`;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(
    elementType: T
): FC<HtmlElementProps<T>> {
    const HtmlElementComponent: FC<HtmlElementProps<T>> = ({ ref, ...props }) => {
        const { className, ...otherProps } = props;
        const { styleProps, restProps } = useStyledSystem(otherProps);

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
            <As ref={ref} style={styleProps} className={classNames} {...restProps} />
        );
    };
    return HtmlElementComponent;
}
