import { clsx } from "clsx";
import type { CSSProperties, FC, Ref } from "react";
import {
    Heading as RACHeading,
    useContextProps,
    type HeadingProps as RACHeadingProps
} from "react-aria-components";

import { bemHelper, ClearTextSlots, SlotProvider } from "../../utils";

import styles from "./Heading.module.scss";
import type { HeadingSize } from "./Heading.types";
import { HeadingContext } from "./HeadingContext";


export const GlobalHeadingCssSelector = "vui-heading";

export interface HeadingProps extends RACHeadingProps {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: HeadingSize;
    ref?: Ref<HTMLHeadingElement>;
}

/**
 * A primitive heading component matching vicky-ui's typography type scale.
 */
const Heading: FC<HeadingProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, HeadingContext);
    const { className, size = "md", children, style, ...otherProps } = props;
    const bemStyles = bemHelper(styles);
    const heading = bemStyles?.["vui-heading"];

    const classNames = clsx(GlobalHeadingCssSelector, heading({ [size]: !!size }), className);
    const mergedStyles: CSSProperties = {
        ...style
    };

    return (
        <RACHeading ref={ref} className={classNames} style={mergedStyles} {...otherProps}>
            <ClearTextSlots>
                <SlotProvider
                    values={[
                        [
                            HeadingContext,
                            {
                                size: "inherit"
                            }
                        ]
                    ]}
                >
                    {children}
                </SlotProvider>
            </ClearTextSlots>
        </RACHeading>
    );
};
Heading.displayName = "Heading";
export { Heading };

/**
 * Creates a Heading component with the specified level and a default size based on the level.
 * @param as
 */
function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
    const level = parseInt(as[1]);
    // Set default size based on level
    let defaultSize: HeadingSize = "md";
    switch (level) {
        case 1:
            defaultSize = "2xl";
            break;
        case 2:
            defaultSize = "xl";
            break;
        case 3:
            defaultSize = "lg";
            break;
        case 4:
            defaultSize = "md";
            break;
        case 5:
            defaultSize = "sm";
            break;
        case 6:
            defaultSize = "xs";
            break;
        default:
            throw new Error(`Invalid heading level: ${level}`);
    }

    return (props: HeadingProps) => {
        return <Heading {...props} level={level} size={defaultSize} />;
    };
}

/**
 *
 * A primitive h1 component matching vicky-ui's typography type scale.
 *
 */
export const H1 = createHeading("h1");

/**
 *
 * A primitive h2 component matching vicky-ui's typography type scale.
 *
 */
export const H2 = createHeading("h2");

/**
 *
 * A primitive h3 component matching vicky-ui's typography type scale.
 *
 */
export const H3 = createHeading("h3");

/**
 *
 * A primitive h4 component matching vicky-ui's typography type scale.
 *
 */
export const H4 = createHeading("h4");

/**
 *
 * A primitive h5 component matching vicky-ui's typography type scale.
 *
 */
export const H5 = createHeading("h5");

/**
 *
 * A primitive h6 component matching vicky-ui's typography type scale.
 *
 */
export const H6 = createHeading("h6");
