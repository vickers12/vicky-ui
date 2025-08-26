import { clsx } from "clsx";
import type { LucideIcon, LucideProps } from "lucide-react";
import type { FC } from "react";
import { type SlotProps, useContextProps } from "react-aria-components";

import type { HtmlSVGProps } from "../../html-elements/elements";

import styles from "./Icon.module.scss";
import { IconContext } from "./IconContext";

export const GlobalIconCssSelector = "vui-icon";

export type IconSize = "sm" | "md" | "lg" | "xl";

export interface IconProps extends HtmlSVGProps, SlotProps, LucideProps {
    /**
     * Setting absoluteStrokeWidth to true will make the stroke width absolute.
     *
     * @default 'false'
     */
    absoluteStrokeWidth?: LucideProps["absoluteStrokeWidth"];
    /**
     * Icon color
     */
    color?: LucideProps["color"];
    /**
     * The Lucide Icon component
     */
    icon: LucideIcon;
    /**
     * Icon size (number or string)
     */
    size?: IconSize;
    /**
     * The icon stroke width
     */
    strokeWidth?: LucideProps["strokeWidth"];
}

/**
 * An Icon component that wraps a Lucide icon.
 */
const Icon: FC<IconProps> = ({ ref, ...props }: IconProps) => {
    [props, ref] = useContextProps(props, ref, IconContext);
    const { className, icon: LIcon, size, ...rest } = props;
    const sizeMap = new Map();
    sizeMap.set("sm", 16);
    sizeMap.set("md", 24);
    sizeMap.set("lg", 32);
    sizeMap.set("xl", 40);

    const classNames = clsx(GlobalIconCssSelector, styles["vui-icon"], className);

    return <LIcon className={classNames} size={sizeMap.get(size)} {...rest} />;
};
Icon.displayName = "Icon";
export { Icon };

