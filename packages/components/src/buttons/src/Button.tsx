import type { FC } from "react";
import { composeRenderProps, DEFAULT_SLOT, Button as RACButton, type ButtonProps as RACButtonProps, useContextProps } from "react-aria-components";

import { useSlot } from "../../hooks";
import type { HtmlButtonProps } from "../../html-elements/elements";
import { IconContext, type IconSize } from "../../icon";
import { TextContext } from "../../text";
import { bemHelper, ClearTextSlots, composeClassnameRenderProps, ensureTextWrapper, SlotProvider } from "../../utils";

import styles from "./Button.module.scss";
import { ButtonContext } from "./ButtonContext";

export const GlobalButtonCssSelector = "vui-button";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Pick<HtmlButtonProps, "ref">, RACButtonProps {
    /**
     * The visual style of the button.
     * @default "primary"
     */
    variant?: ButtonVariant;

    /**
     * A button can vary in size.
     * @default "md"
     */
    size?: ButtonSize;

    /**
     * Whether or not the button takes up the width of its container.
     */
    isFluid?: boolean;
}

/**
 * The Button pattern is a layout primitive that can be used to stack elements in the horizontal direction and apply a space between them.
 */
const Button: FC<ButtonProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref, ButtonContext);
    const { className, children: childrenProp, isFluid, variant = "primary", size = "md", ...rest } = props;

    const [textRef, hasText] = useSlot();
    const buttonToIconSize = new Map<ButtonSize, IconSize>([
        ["sm", "sm"],
        ["md", "sm"],
        ["lg", "md"]
    ]);

    const iconSize = buttonToIconSize.get(size);

    const bemStyles = bemHelper(styles);
    const buttomBem = bemStyles?.["vui-button"];

    const classNames = composeClassnameRenderProps(
        className,
        GlobalButtonCssSelector,
        buttomBem({
            variant: !!variant,
            size: !!size,
            fluid: isFluid,
            "icon-only": !hasText
        })
    );

    const children = composeRenderProps(childrenProp, prev => {
        return ensureTextWrapper(prev);
    });

    return (
        <ClearTextSlots>
            <SlotProvider
                values={[
                    [
                        IconContext,
                        {
                            slots: {
                                [DEFAULT_SLOT]: {
                                    size: iconSize,
                                    className: styles["vui-button__icon"]
                                },
                                "end-icon": {
                                    size: iconSize,
                                    className: styles["vui-button__end-icon"]
                                }
                            }
                        }
                    ],
                    [
                        TextContext,
                        {
                            className: styles["vui-button__text"],
                            size: size,
                            ref: textRef
                        }
                    ]
                ]}
            >
                <RACButton ref={ref} slot={props.slot || undefined} className={classNames} {...rest}>
                    {buttonRenderProps => {
                        return <>{children(buttonRenderProps)}</>;
                    }}
                </RACButton>
            </SlotProvider>
        </ClearTextSlots>
    );
};

Button.displayName = "Button";
export { Button };
