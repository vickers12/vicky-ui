import { Globals, Property } from "csstype";
import {
    BorderRadiusToken,
    BoxShadowToken,
    ColorBorderToken,
    ColorSurfaceToken,
    ColorTextToken,
    ColorToken,
    SpaceToken
} from "packages/tokens/dist/types/index.js";
import { CSSProperties } from "react";

export type TokenOrString<T extends string> = T | (string & {});
export type SpaceTokenType = TokenOrString<SpaceToken>;
export type BorderRadiusTokenType = TokenOrString<BorderRadiusToken>;
export type BoxShadowTokenType = TokenOrString<BoxShadowToken>;
export type ColorTokenType = TokenOrString<ColorToken>;
export type BorderColorTokenType = TokenOrString<ColorBorderToken>;
export type SurfaceColorTokenType = TokenOrString<ColorSurfaceToken>;
export type TextColorTokenType = TokenOrString<ColorTextToken>;

export type Percentage = `${number}%`;
export type FRValues = `${number}fr`;

export type FlexWrap = Property.FlexWrap | boolean;
export type GridColumSpanValue = number;
export type GridRowSpanValue = number;
export type GridTemplateAreasValue = Property.GridTemplateAreas | Array<string>;
export type CssGrid = "auto" | "max-content" | "min-content" | Globals | Percentage | FRValues;
export type CssGridTemplate = "none" | "subgrid" | CssGrid;

export type GridTemplateColumnsValue =
    | string
    | 0
    | CssGridTemplate
    | Array<string | CssGridTemplate>;

export type GridTemplateRowsValue = string | 0 | CssGridTemplate | Array<string | CssGridTemplate>;

export const STYLED_SYSTEM_KEYS = [
    "padding",
    "paddingX",
    "paddingY",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "margin",
    "marginX",
    "marginY",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "backgroundColor",
    "textColor",
    "borderColor",
    "border",
    "borderStyle",
    "borderWidth",
    "radius",
    "shadow",
    "height",
    "width",
    "minHeight",
    "minWidth",
    "maxHeight",
    "maxWidth",

    "display",
    "flexDirection",
    "flexBasis",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "alignItems",
    "justifyContent",
    "alignContent",

    "grid",
    "gridArea",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplate",
    "gridTemplateAreas",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridColumnSpan",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridRowSpan",
    "gap",
    "rowGap",
    "columnGap",
    "justifyContent",
    "justifyItems",
    "justifySelf",

    "style"
] as const;

export type StyledSystemKey = (typeof STYLED_SYSTEM_KEYS)[number];

export interface StyledSystemProps {
    padding?: SpaceTokenType;
    paddingX?: SpaceTokenType;
    paddingY?: SpaceTokenType;
    paddingLeft?: SpaceTokenType;
    paddingRight?: SpaceTokenType;
    paddingTop?: SpaceTokenType;
    paddingBottom?: SpaceTokenType;
    margin?: SpaceTokenType;
    marginX?: SpaceTokenType;
    marginY?: SpaceTokenType;
    marginLeft?: SpaceTokenType;
    marginRight?: SpaceTokenType;
    marginTop?: SpaceTokenType;
    marginBottom?: SpaceTokenType;
    gap?: SpaceTokenType;
    height?: string | number;
    width?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;

    backgroundColor?: ColorTokenType | SurfaceColorTokenType;
    textColor?: ColorTokenType | TextColorTokenType;
    borderColor?: ColorTokenType | BorderColorTokenType;

    border?: string;
    borderStyle?: string;
    borderWidth?: string;

    radius?: BorderRadiusTokenType;
    shadow?: BoxShadowTokenType;

    display?: Property.Display;

    /**
     * The CSS align-items property.
     * This property defines how flex items are aligned along the cross axis of the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'baseline', or 'stretch'.
     *
     * @default "stretch"
     */
    alignItems?: Property.AlignItems;

    /**
     * The CSS justify-content property.
     * This property defines how flex items are distributed along the main axis of the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', or 'space-evenly'.
     *
     * @default "flex-start"
     */
    justifyContent?: Property.JustifyContent;

    /**
     * The CSS justify-items property.
     * This property defines how items are aligned within their grid area.
     * It can take values like 'start', 'end', 'center', or 'stretch'.
     *
     * @default "stretch"
     */
    justifyItems?: Property.JustifyItems;

    /**
     * The CSS justify-self property.
     * This property defines how an individual item is aligned within its grid area.
     * It can take values like 'start', 'end', 'center', or 'stretch'.
     *
     * @default "auto"
     */
    justifySelf?: Property.JustifySelf;

    /**
     * The CSS align-content property.
     * This property defines how multiple lines of flex items are aligned in the flex container.
     * It can take values like 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', or 'stretch'.
     *
     * @default "stretch"
     */
    alignContent?: Property.AlignContent;

    /**
     * The flex direction of the container. Can be row, column, row-reverse or column-reverse.
     * @default "row"
     */
    flexDirection?: Property.FlexDirection;

    /**
     * Whether to wrap the flex items. The value can also be a boolean.
     * If true, it will use the default wrap value of "wrap".
     * If false, it will use "nowrap".
     *
     * @default "wrap"
     */
    flexWrap?: FlexWrap;

    /**
     * An alias for the css flex-basis property.
     * This property defines the initial main size of a flex item.
     * It can be a length (like '100px') or a percentage (like '50%').
     *
     * @default "auto"
     */
    flexBasis?: Property.FlexBasis;

    /**
     * An alias for the css flex-grow property.
     * This property defines the ability of a flex item to grow if necessary.
     * It can be a number (like 1) or a percentage (like '50%').
     *
     * @default 0
     */
    flexGrow?: Property.FlexGrow;

    /**
     * An alias for the css flex-shrink property.
     * This property defines the ability of a flex item to shrink if necessary.
     * It can be a number (like 1) or a percentage (like '50%').
     *
     * @default 1
     */
    flexShrink?: Property.FlexShrink;

    /**
     * The CSS grid property.
     * This property defines the grid layout of the element.
     * It can be a string representing the grid template or an object with grid properties.
     *
     * @default "none"
     */
    grid?: CssGrid;

    /**
     * The CSS grid-area property.
     * This property defines the grid area of the element.
     * It can be a string representing the grid area name or a shorthand for grid-row and grid-column.
     *
     * @default "auto / auto / auto / auto"
     */
    gridArea?: Property.GridArea;

    gridAutoColumns?: Property.GridAutoColumns;
    gridAutoFlow?: Property.GridAutoFlow;
    gridAutoRows?: Property.GridAutoRows;

    /**
     * The CSS grid-template property.
     * This property defines the grid template of the element.
     * It can be a string representing the grid template or an object with grid template properties.
     *
     * @default "none"
     */
    gridTemplate?: CssGridTemplate;

    /**
     * The CSS grid-template-areas property.
     * This property defines the named grid areas of the element.
     * It can be a string representing the grid areas or an array of strings.
     *
     * @default "none"
     */
    gridTemplateAreas?: GridTemplateAreasValue;

    /**
     * The CSS grid-template-columns property.
     * This property defines the grid template columns of the element.
     * It can be a string representing the grid columns or an array of strings.
     *
     * @default "none"
     */
    gridTemplateColumns?: GridTemplateColumnsValue;

    /**
     * The CSS grid-template-rows property.
     * This property defines the grid template rows of the element.
     * It can be a string representing the grid rows or an array of strings.
     *
     * @default "none"
     */
    gridTemplateRows?: GridTemplateRowsValue;

    /**
     * The CSS grid-column property.
     * This property defines the grid column of the element.
     * It can be a string representing the grid column or a shorthand for grid-column-start and grid-column-end.
     *
     * @default "auto / auto"
     */
    gridColumn?: Property.GridColumn;

    /**
     * The CSS grid-column-end property.
     * This property defines the end line of the grid column of the element.
     * It can be a string representing the end line or a number representing the line index.
     *
     * @default "auto"
     */
    gridColumnEnd?: Property.GridColumnEnd;

    /**
     * The CSS grid-column-start property.
     * This property defines the start line of the grid column of the element.
     * It can be a string representing the start line or a number representing the line index.
     *
     * @default "auto"
     */
    gridColumnStart?: Property.GridColumnStart;

    /**
     * The CSS grid-column-span property.
     * This property defines how many columns the element spans in the grid.
     * It can be a number representing the span or a string like 'all'.
     *
     * @default 1
     */
    gridColumnSpan?: GridColumSpanValue;

    /**
     * The CSS grid-row property.
     * This property defines the grid row of the element.
     * It can be a string representing the grid row or a shorthand for grid-row-start and grid-row-end.
     *
     * @default "auto / auto"
     */
    gridRow?: Property.GridRow;

    /**
     * The CSS grid-row-end property.
     * This property defines the end line of the grid row of the element.
     * It can be a string representing the end line or a number representing the line index.
     *
     * @default "auto"
     */
    gridRowEnd?: Property.GridRowEnd;

    /**
     * The CSS grid-row-start property.
     * This property defines the start line of the grid row of the element.
     * It can be a string representing the start line or a number representing the line index.
     *
     * @default "auto"
     */
    gridRowStart?: Property.GridRowStart;

    /**
     * The CSS grid-row-span property.
     * This property defines how many rows the element spans in the grid.
     * It can be a number representing the span or a string like 'all'.
     *
     * @default 1
     */
    gridRowSpan?: GridRowSpanValue;

    /**
     * The CSS row-gap property.
     * This property defines the gap between rows in the grid or flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default "0"
     */
    rowGap?: SpaceTokenType;

    /**
     * The CSS column-gap property.
     * This property defines the gap between columns in the grid or flex container.
     * It can be a length (like '10px') or a percentage (like '5%').
     *
     * @default "0"
     */
    columnGap?: SpaceTokenType;

    /**
     * Additional inline styles to apply to the element.
     */
    style?: CSSProperties;
}
