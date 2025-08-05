import clsx from "clsx";
import type { FC } from "react";
import { useContextProps } from "react-aria-components";

import { StackContext } from "./StackContext";
import { Flex, FlexProps } from "../../flex";

export const GlobalStackCssSelector = "vui-flex";

export interface StackProps extends Omit<FlexProps, "direction" | "alignItems" | "justifyContent"> {
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;

    /**
     * An alias for the css align-items property.
     */
    alignX?: FlexProps["alignItems"];

    /**
     * An alias for the css justify-content property.
     */
    alignY?: FlexProps["justifyContent"];
}

/**
 * The Stack pattern is a layout primitive that can be used to stack elements in the vertical direction and apply a space between them.
 */
const Stack: FC<StackProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, StackContext);
    const {
        alignX,
        alignY = "center",
        className,
        gap = "space-stack-md",
        reverse,
        ...rest
    } = props;

    const classNames = clsx(GlobalStackCssSelector, className);

    return (
        <Flex
            ref={ref}
            alignItems={alignY}
            justifyContent={alignX}
            direction={reverse ? "column-reverse" : "column"}
            gap={gap}
            className={classNames}
            {...rest}
        />
    );
};

Stack.displayName = "Stack";
export { Stack };
