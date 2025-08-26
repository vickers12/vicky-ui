import { clsx } from "clsx";
import type { FC, Ref } from "react";
import {
    Text as RACText,
    useContextProps,
    type TextProps as RACTextProps
} from "react-aria-components";

import { bemHelper, ClearTextSlots, SlotProvider } from "../../utils";

import styles from "./Text.module.scss";
import type { TextSize, TextWeight } from "./Text.types";
import { TextContext } from "./TextContext";


export const GlobalTextCssSelector = "vui-text";


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
