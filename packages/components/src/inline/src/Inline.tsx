import clsx from "clsx";
import type { FC } from "react";
import { useContextProps } from "react-aria-components";

import { InlineContext } from "./InlineContext";
import { Flex, FlexProps } from "../../flex";

export const GlobalInlineCssSelector = "vui-inline";

export interface InlineProps
    extends Omit<FlexProps, "direction" | "alignItems" | "justifyContent"> {
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;

    /**
     * An alias for the css justify-content property.
     */
    alignX?: FlexProps["justifyContent"];

    /**
     * An alias for the css align-items property.
     */
    alignY?: FlexProps["alignItems"];
}

/**
 * The Inline pattern is a layout primitive that can be used to stack elements in the horizontal direction and apply a space between them.
 */
const Inline: FC<InlineProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, InlineContext);
    const {
        alignX,
        alignY = "center",
        className,
        gap = "space-inline-md",
        wrap = true,
        reverse,
        ...rest
    } = props;

    const classNames = clsx(GlobalInlineCssSelector, className);

    return (
        <Flex
            ref={ref}
            alignItems={alignY}
            justifyContent={alignX}
            direction={reverse ? "row-reverse" : "row"}
            gap={gap}
            wrap={wrap}
            className={classNames}
            {...rest}
        />
    );
};

Inline.displayName = "Inline";
export { Inline };
