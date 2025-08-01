// system/useStyledSystem.ts

import {
    BorderRadiusToken,
    ColorToken,
    SpaceToken,
    ColorBorderToken,
    ColorSurfaceToken,
    ColorTextToken,
    BoxShadowToken,
    styledSystemToTokenMappings
} from "@vicky-ui/tokens/types";
import { CSSProperties } from "react";

type TokenOrString<T extends string> = T | (string & {});
type SpaceTokenType = TokenOrString<SpaceToken>;
type BorderRadiusTokenType = TokenOrString<BorderRadiusToken>;
type BoxShadowTokenType = TokenOrString<BoxShadowToken>;
type ColorTokenType = TokenOrString<ColorToken>;
type BorderColorTokenType = TokenOrString<ColorBorderToken>;
type SurfaceColorTokenType = TokenOrString<ColorSurfaceToken>;
type TextColorTokenType = TokenOrString<ColorTextToken>;

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
    "gap",
    "backgroundColor",
    "textColor",
    "borderColor",
    "border",
    "borderStyle",
    "borderWidth",
    "radius",
    "shadow",
    "style"
] as const;

type StyledSystemKey = (typeof STYLED_SYSTEM_KEYS)[number];

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

    backgroundColor?: ColorTokenType | SurfaceColorTokenType;
    textColor?: ColorTokenType | TextColorTokenType;
    borderColor?: ColorTokenType | BorderColorTokenType;

    border?: string;
    borderStyle?: string;
    borderWidth?: string;

    radius?: BorderRadiusTokenType;
    shadow?: BoxShadowTokenType;

    style?: CSSProperties;
}

function omitStyledSystemProps<P extends Record<string, any>>(props: P): Omit<P, StyledSystemKey> {
    const clean: Record<string, any> = {};
    for (const key in props) {
        if (!STYLED_SYSTEM_KEYS.includes(key as StyledSystemKey)) {
            clean[key] = props[key];
        }
    }
    return clean as Omit<P, StyledSystemKey>;
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
    if (role && map instanceof Map) {
        const roleMap = map.get(role);
        if (roleMap instanceof Map && roleMap.has(value)) {
            return `var(--vui-${roleMap.get(value).replace(/'/g, "")})`;
        }
    }

    // Try flat (core/color/space/etc.)
    if (map instanceof Map && map.has(value)) {
        return `var(--vui-${map.get(value).replace(/'/g, "")})`;
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
        backgroundColor,
        textColor,
        border,
        borderStyle,
        borderWidth,
        borderColor,
        radius,
        shadow,
        style = {},
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
        ...style
    };

    const filteredProps = omitStyledSystemProps(restProps);

    return {
        styleProps: resolvedStyle,
        restProps: filteredProps
    };
}
