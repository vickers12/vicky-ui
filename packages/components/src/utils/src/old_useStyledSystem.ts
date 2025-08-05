/* // system/useStyledSystem.ts

import { styledSystemToTokenMappings } from "@vicky-ui/tokens/types";
import { CSSProperties } from "react";
import { GridTemplateAreasValue, STYLED_SYSTEM_KEYS, StyledSystemKey } from "./index";
import { P } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";
import { Property } from "csstype";

function omitStyledSystemProps<P extends Record<string, any>>(props: P): Omit<P, StyledSystemKey> {
    const clean: Record<string, any> = {};
    for (const key in props) {
        if (!STYLED_SYSTEM_KEYS.includes(key as StyledSystemKey)) {
            clean[key] = props[key];
        }
    }
    return clean as Omit<P, StyledSystemKey>;
}

function getTokenVar(map: typeof Map, value: string): string | undefined {
    if (map instanceof Map && map.has(value)) {
        return `var(--vui-${map.get(value)})`;
    }
    return undefined;
}

function getTokenVarFromSubCat(
    map: typeof Map,
    subCategory: string,
    value: string
): string | undefined {
    if (subCategory && map instanceof Map) {
        const roleMap = map.get(subCategory);
        return getTokenVar(roleMap, value);
    }
    return undefined;
}

function resolveTokenVar(
    value: string | undefined,
    category: string,
    role?: string
): string | undefined {
    if (!value) return undefined;

    const map = styledSystemToTokenMappings.get(category);
    if (!map) return value;

    // Try role-based (for color tokens)
    const tokenValue = getTokenVarFromSubCat(map, role ?? "", value);
    if (tokenValue) {
        return tokenValue;
    }

    // Try core map
    const coreTokenValue = getTokenVarFromSubCat(map, "core", value);
    if (coreTokenValue) {
        return coreTokenValue;
    }

    // Try map without subcategory
    const valueFromMap = getTokenVar(map, value);
    if (valueFromMap) {
        return valueFromMap;
    }

    return value;
}

function gridTemplateAreasHandler(value: GridTemplateAreasValue): Property.GridTemplateAreas {
    if (value && Array.isArray(value)) {
        return value.map((v) => `"${v}"`).join(" ");
    }
    return value;
}

function gridTemplateDimensionsHandler(value: string | Array<string>): string {
    if (value && Array.isArray(value)) {
        return value.join(" ");
    }
    return value;
}

export function useStyledSystem<P extends Record<string, any>>(props: P) {
    const {
        padding,
        paddingX,
        paddingY,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        margin,
        marginX,
        marginY,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        gap,
        rowGap,
        columnGap,
        backgroundColor,
        textColor,
        border,
        borderStyle,
        borderWidth,
        borderColor,
        radius,
        shadow,
        height,
        width,
        minHeight,
        minWidth,
        maxHeight,
        maxWidth,

        display,
        flexDirection,
        flexBasis,
        flexGrow,
        flexShrink,
        flexWrap,
        alignItems,
        justifyContent,
        alignContent,
        justifySelf,
        justifyItems,

        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnStart,
        gridColumnSpan,
        gridRow,
        gridRowEnd,
        gridRowStart,
        gridRowSpan,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,

        style,
        ...restProps
    } = props;

    const resolvedStyle: CSSProperties = {
        ...(padding && { padding: resolveTokenVar(padding, "space") }),
        ...(paddingX && {
            paddingInline: resolveTokenVar(paddingX, "space")
        }),
        ...(paddingY && {
            paddingBlock: resolveTokenVar(paddingY, "space")
        }),
        ...(paddingLeft && {
            paddingLeft: resolveTokenVar(paddingLeft, "space")
        }),
        ...(paddingRight && {
            paddingRight: resolveTokenVar(paddingRight, "space")
        }),
        ...(paddingTop && {
            paddingTop: resolveTokenVar(paddingTop, "space")
        }),
        ...(paddingBottom && {
            paddingBottom: resolveTokenVar(paddingBottom, "space")
        }),
        ...(margin && { margin: resolveTokenVar(margin, "space") }),
        ...(marginX && {
            marginInline: resolveTokenVar(marginX, "space")
        }),
        ...(marginY && {
            marginBlock: resolveTokenVar(marginY, "space")
        }),
        ...(marginLeft && {
            marginLeft: resolveTokenVar(marginLeft, "space")
        }),
        ...(marginRight && {
            marginRight: resolveTokenVar(marginRight, "space")
        }),
        ...(marginTop && {
            marginTop: resolveTokenVar(marginTop, "space")
        }),
        ...(marginBottom && {
            marginBottom: resolveTokenVar(marginBottom, "space")
        }),
        ...(gap && { gap: resolveTokenVar(gap, "space") }),
        ...(rowGap && { rowGap: resolveTokenVar(rowGap, "space") }),
        ...(columnGap && { columnGap: resolveTokenVar(columnGap, "space") }),
        ...(backgroundColor && {
            backgroundColor: resolveTokenVar(backgroundColor, "color", "surface")
        }),
        ...(textColor && {
            color: resolveTokenVar(textColor, "color", "text")
        }),
        ...(border && {
            border: border
        }),
        ...(borderStyle && {
            borderStyle: borderStyle
        }),
        ...(borderWidth && {
            borderWidth: borderWidth
        }),
        ...(borderColor && {
            borderWidth: borderWidth ?? "1px",
            borderStyle: borderStyle ?? "solid",
            borderColor: resolveTokenVar(borderColor, "color", "border")
        }),
        ...(radius && { borderRadius: resolveTokenVar(radius, "shape") }),
        ...(shadow && { boxShadow: resolveTokenVar(shadow, "elevation") }),
        ...(height && { height }),
        ...(width && { width }),
        ...(minHeight && { minHeight }),
        ...(minWidth && { minWidth }),
        ...(maxHeight && { maxHeight }),
        ...(maxWidth && { maxWidth }),
        ...(display && { display }),
        ...(flexDirection && { flexDirection }),
        ...(flexBasis && { flexBasis }),
        ...(flexGrow !== undefined && { flexGrow }),
        ...(flexShrink !== undefined && { flexShrink }),
        ...(flexWrap && { flexWrap }),
        ...(alignItems && { alignItems }),
        ...(justifyContent && { justifyContent }),
        ...(alignContent && { alignContent }),
        ...(justifySelf && { justifySelf }),
        ...(justifyItems && { justifyItems }),
        ...(grid && { display: "grid" }),
        ...(gridArea && { gridArea }),
        ...(gridAutoColumns && {
            gridAutoColumns
        }),
        ...(gridAutoFlow && { gridAutoFlow }),
        ...(gridAutoRows && {
            gridAutoRows
        }),
        ...(gridColumn && { gridColumn }),
        ...(gridColumnEnd && { gridColumnEnd }),
        ...(gridColumnStart && { gridColumnStart }),
        ...(gridColumnSpan && { gridColumnSpan: gridColumnSpan }),
        ...(gridRow && { gridRow }),
        ...(gridRowEnd && { gridRowEnd }),
        ...(gridRowStart && { gridRowStart }),
        ...(gridRowSpan && { gridRowSpan }),
        ...(gridTemplate && { gridTemplate }),
        ...(gridTemplateAreas && {
            gridTemplateAreas: gridTemplateAreasHandler(gridTemplateAreas)
        }),
        ...(gridTemplateColumns && {
            gridTemplateColumns: gridTemplateDimensionsHandler(gridTemplateColumns)
        }),
        ...(gridTemplateRows && {
            gridTemplateRows: gridTemplateDimensionsHandler(gridTemplateRows)
        }),

        ...style
    };

    const filteredProps = omitStyledSystemProps(restProps);

    return {
        styleProps: resolvedStyle,
        restProps: filteredProps
    };
}
 */
