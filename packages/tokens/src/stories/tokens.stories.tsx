import type { Meta, StoryObj } from "@storybook/react-vite";

import { List, type Style, type TokenType } from "./components/List";
import tokens from "./datas/tokens.json" with { type: "json" };

const meta = {
    title: "Tokens/Colors",
    component: List
} satisfies Meta<typeof List>;

export default meta;

function filterByTokenType(styles: Style[], tokenType: TokenType) {
    switch (tokenType) {
        case "core":
            return styles.filter(
                (style) =>
                    !style.name.includes("core") &&
                    !style.name.includes("surface") &&
                    !style.name.includes("border") &&
                    !style.name.includes("text")
            );
        case "background":
            return styles.filter((style) => style.name.includes("surface"));
        case "border":
            return styles.filter((style) => style.name.includes("border"));
        case "text":
            return styles.filter((style) => style.name.includes("text"));
    }
}

type Story = StoryObj<typeof meta>;

export const Core: Story = {
    args: {
        listStyles: filterByTokenType(tokens, "core"),
        tokenType: "core"
    }
};

export const SemanticBackgroundLight: Story = {
    args: {
        listStyles: filterByTokenType(tokens, "background"),
        tokenType: "background"
    }
};

export const SemanticBorderLight: Story = {
    args: {
        listStyles: filterByTokenType(tokens, "border"),
        tokenType: "border"
    }
};

export const SemanticTextLight: Story = {
    args: {
        listStyles: filterByTokenType(tokens, "text"),
        tokenType: "text"
    }
};
