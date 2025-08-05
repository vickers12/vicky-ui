import clsx from "clsx";
import type { FC, Ref } from "react";
import {
    Text as RACText,
    useContextProps,
    type TextProps as RACTextProps
} from "react-aria-components";

import { ClearTextSlots, bemHelper, SlotProvider } from "../../utils";

import { TextContext } from "./TextContext";

import styles from "./Text.module.scss";

export const GlobalTextCssSelector = "vui-text";

export const TEXT_SIZES = ["inherit", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
export type TextSize = (typeof TEXT_SIZES)[number];

export const TEXT_WEIGHTS = ["inherit", "normal", "medium", "semibold", "bold"] as const;
export type TextWeight = (typeof TEXT_WEIGHTS)[number];

export interface TextProps extends RACTextProps {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: TextSize;
    /**
     * The font weight to use.
     * @default "regular"
     */
    weight?: TextWeight;
    ref?: Ref<HTMLSpanElement>;
}

/**
 * A primitive text component matching vicky-ui's typography type scale.
 */
const Text: FC<TextProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, TextContext);
    const {
        className,
        size = "md",
        weight = "regular",
        children,
        elementType = "span",
        ...otherProps
    } = props;
    const bemStyles = bemHelper(styles);
    const text = bemStyles?.["vui-text"];
    const sizeClass = size === "inherit" ? "inherit-size" : size;
    const weightClass = weight === "inherit" ? "inherit-weight" : weight;
    const classNames = clsx(
        GlobalTextCssSelector,
        text({ [sizeClass as string]: !!size }),
        text({ [weightClass as string]: !!weight }),
        className
    );

    return (
        <RACText ref={ref} elementType={elementType} className={classNames} {...otherProps}>
            <ClearTextSlots>
                <SlotProvider
                    values={[
                        [
                            TextContext,
                            {
                                size: "inherit"
                            }
                        ]
                    ]}
                >
                    {children}
                </SlotProvider>
            </ClearTextSlots>
        </RACText>
    );
};
Text.displayName = "Text";
export { Text };
