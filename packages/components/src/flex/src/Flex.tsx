import { cssVar, type SpaceToken } from "@vicky-ui/tokens/types";
import { clsx } from "clsx";
import type { Property } from "csstype";
import type { FC } from "react";
import { useContextProps } from "react-aria-components";

import { Div, type DivProps } from "../../html-elements/elements";

import styles from "./Flex.module.scss";
import { FlexContext } from "./FlexContext";


export const GlobalFlexCssSelector = "vui-flex";

type FlexWrap = Property.FlexWrap | boolean;

export interface FlexProps extends DivProps {
    /**
     * The CSS align-content property.
     * This property defines how multiple lines of flex items are aligned in the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', or 'stretch'.
     *
     * @default "stretch"
     */
    alignContent?: Property.AlignContent;

    /**
     * The CSS align-items property.
     * This property defines how flex items are aligned along the cross axis of the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'baseline', or 'stretch'.
     *
     * @default "stretch"
     */
    alignItems?: Property.AlignItems;

    /**
     * An alias for the css flex-basis property.
     * This property defines the initial main size of a flex item.
     * It can be a length (like '100px') or a percentage (like '50%').
     *
     * @default "auto"
     */
    basis?: Property.FlexBasis;

    /**
     * The flex direction of the container. Can be row, column, row-reverse or column-reverse.
     * @default "row"
     */
    direction?: Property.FlexDirection;

    /** The CSS gap property.
     * This property defines the gap between flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    gap?: SpaceToken;

    /** The CSS row-gap property.
     * This property defines the gap between rows of flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    rowGap?: SpaceToken;

    /** The CSS column-gap property.
     * This property defines the gap between columns of flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    columnGap?: SpaceToken;

    /**
     * An alias for the css flex-grow property.
     * This property defines the ability of a flex item to grow if necessary.
     * It can be a number (like 1) or a percentage (like '50%').
     *
     * @default 0
     */
    grow?: Property.FlexGrow;

    /**
     * Whether to display the flex container as an inline element.
     * If true, the container will be displayed as an inline-flex element.
     * If false, it will be displayed as a flex element.
     *
     * @default false
     */
    inline?: boolean;

    /**
     * The CSS justify-content property.
     * This property defines how flex items are distributed along the main axis of the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', or 'space-evenly'.
     *
     * @default "flex-start"
     */
    justifyContent?: Property.JustifyContent;

    /**
     * An alias for the css flex-shrink property.
     * This property defines the ability of a flex item to shrink if necessary.
     * It can be a number (like 1) or a percentage (like '50%').
     *
     * @default 1
     */
    shrink?: Property.FlexShrink;

    /**
     * Whether to wrap the flex items. The value can also be a boolean.
     * If true, it will use the default wrap value of "wrap".
     * If false, it will use "nowrap".
     *
     * @default "wrap"
     */
    wrap?: FlexWrap;
}

/**
 * A primitive text component matching vicky-ui's typography type scale.
 */
const Flex: FC<FlexProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, FlexContext);
    const {
        direction,
        inline,
        basis,
        grow,
        shrink,
        wrap = false,
        alignItems,
        justifyContent,
        alignContent,
        gap,
        rowGap,
        columnGap,
        className,
        style: styleProp,
        ...otherProps
    } = props;

    const classNames = clsx(GlobalFlexCssSelector, styles["vui-flex"], className);

    const cssVars = {
        "--flex-display": inline ? "inline-flex" : "flex",
        "--flex-direction": direction,
        "--flex-basis": basis,
        "--flex-grow": grow,
        "--flex-shrink": shrink,
        "--flex-wrap": flexWrapValue(wrap),
        "--align-items": flexAlignValue(alignItems),
        "--justify-content": justifyContent,
        "--align-content": alignContent,
        "--gap": gap ? cssVar.space(gap) : undefined,
        "--row-gap": rowGap ? cssVar.space(rowGap) : undefined,
        "--column-gap": columnGap ? cssVar.space(columnGap) : undefined
    };

    const style = {
        ...styleProp,
        ...cssVars
    };

    return <Div ref={ref} className={classNames} style={style} {...otherProps} />;
};

/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */
function flexAlignValue<T>(value: T) {
    if (value === "start") {
        return "flex-start";
    }

    if (value === "end") {
        return "flex-end";
    }

    return value;
}

function flexWrapValue(value: FlexWrap) {
    if (typeof value === "boolean") {
        return value ? "wrap" : "nowrap";
    }

    return value;
}

Flex.displayName = "Flex";
export { Flex };
