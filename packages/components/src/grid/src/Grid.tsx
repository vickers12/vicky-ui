import { cssVar, type SpaceToken } from "@vicky-ui/tokens/types";
import { clsx } from "clsx";
import type { Globals, Property } from "csstype";
import type { FC } from "react";
import { useContextProps } from "react-aria-components";

import { Div, type DivProps } from "../../html-elements/elements";
import { filterUndefined } from "../../utils";

import styles from "./Grid.module.scss";
import { GridContext } from "./GridContext";

export const GlobalGridCssSelector = "vui-grid";

export type Percentage = `${number}%`;
export type FRValues = `${number}fr`;

export type GridTemplateAreasValue = Property.GridTemplateAreas | Array<string>;
export type CssGrid = "auto" | "max-content" | "min-content" | Globals | Percentage | FRValues;
export type CssGridTemplate = "none" | "subgrid" | CssGrid;

export type GridTemplateColumnsValue =
    | string
    | 0
    | CssGridTemplate
    | Array<string | CssGridTemplate>;

export type GridTemplateRowsValue = string | 0 | CssGridTemplate | Array<string | CssGridTemplate>;

export interface GridProps extends DivProps {
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
     * An alias for the css grid-auto-columns property.
     */
    autoColumns?: Property.GridAutoColumns;

    /**
     * An alias for the css grid-auto-flow property.
     */
    autoFlow?: Property.GridAutoFlow;

    /**
     * An alias for the css grid-auto-rows property.
     */
    autoRows?: Property.GridAutoRows;

    /**
     * An alias for the css grid-template-areas property.
     */
    areas?: GridTemplateAreasValue;

    /** The CSS column-gap property.
     * This property defines the gap between columns of flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    columnGap?: SpaceToken;

    /** The CSS gap property.
     * This property defines the gap between flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    gap?: SpaceToken;

    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;

    /**
     * The CSS justify-content property.
     * This property defines how grid items are distributed along the main axis of the grid container.
     * It can take values like 'start', 'end', 'center', 'space-between', 'space-around', or 'space-evenly'.
     *
     * @default "start"
     */
    justifyContent?: Property.JustifyContent;

    /** The CSS row-gap property.
     * This property defines the gap between rows of flex items in the flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default 0
     */
    rowGap?: SpaceToken;

    /**
     * An alias for the css grid-template-columns property.
     */
    templateColumns?: GridTemplateColumnsValue;

    /**
     * An alias for the css grid-template-rows property.
     */
    templateRows?: GridTemplateRowsValue;
}

/**
 * A primitive text component matching vicky-ui's typography type scale.
 */
const Grid: FC<GridProps> = ({ ref, ...props }) => {
    [props, ref] = useContextProps(props, ref ?? null, GridContext);
    const {
        alignContent,
        alignItems,
        autoRows,
        areas,
        templateColumns,
        templateRows,
        autoColumns,
        autoFlow,
        inline,
        gap,
        justifyContent,
        rowGap,
        columnGap,
        className,
        style: styleProp,
        ...otherProps
    } = props;

    const classNames = clsx(GlobalGridCssSelector, styles["vui-grid"], className);

    const cssVars = filterUndefined({
        "--grid-display": inline ? "inline-grid" : "grid",
        "--grid-auto-rows": autoRows,
        "--grid-template-areas": areas && gridTemplateAreasHandler(areas),
        "--grid-template-columns":
            templateColumns && gridTemplateDimensionsHandler(templateColumns),
        "--grid-template-rows": templateRows && gridTemplateDimensionsHandler(templateRows),
        "--grid-auto-columns": autoColumns,
        "--grid-auto-flow": autoFlow,
        "--gap": gap ? cssVar.space(gap) : undefined,
        "--row-gap": rowGap ? cssVar.space(rowGap) : undefined,
        "--column-gap": columnGap ? cssVar.space(columnGap) : undefined,
        "--align-content": alignContent,
        "--align-items": alignItems,
        "--justify-content": justifyContent
    });

    const style = {
        ...styleProp,
        ...cssVars
    };

    return <Div ref={ref} className={classNames} style={style} {...otherProps} />;
};

function gridTemplateAreasHandler(value: GridTemplateAreasValue): Property.GridTemplateAreas {
    if (value && Array.isArray(value)) {
        return value.map(v => `"${v}"`).join(" ");
    }

    return value;
}

function gridTemplateDimensionsHandler(value: string | Array<string>): string {
    if (value && Array.isArray(value)) {
        return value.join(" ");
    }

    return value;
}

Grid.displayName = "Grid";
export { Grid };
