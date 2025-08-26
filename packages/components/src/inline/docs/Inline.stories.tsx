// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Div, type DivProps } from "../../html-elements/elements";
import { Inline } from "../src";

const meta = {
    title: "Components/Inline",
    component: Inline,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Inline>;
export default meta;

type Story = StoryObj<typeof meta>;

function Square(props: DivProps) {
    const { style: styleProp, ...rest } = props;
    const style = {
        backgroundColor: "var(--vui-bittersweet-100)",
        minHeight: "4rem",
        minWidth: "4rem",
        ...styleProp
    };

    return <Div style={style} {...rest} />;
}

export const Basic = {
    render: (args: ComponentProps<typeof Inline>) => (
        <Inline {...args}>
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-200)",
                    height: "8rem"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            />
        </Inline>
    )
} satisfies Story;

export const AlignX = {
    render: (args: ComponentProps<typeof Inline>) => (
        <Inline {...args}>
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-200)",
                    height: "8rem"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            />
        </Inline>
    ),
    args: {
        alignX: "center"
    }
} satisfies Story;

export const AlignY = {
    render: (args: ComponentProps<typeof Inline>) => (
        <Inline {...args}>
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-200)",
                    height: "8rem"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            />
        </Inline>
    ),
    args: {
        alignY: "flex-end"
    }
} satisfies Story;

export const Reverse = {
    render: (args: ComponentProps<typeof Inline>) => (
        <Inline {...args}>
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-200)",
                    height: "8rem"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            />
        </Inline>
    ),
    args: {
        reverse: true
    }
} satisfies Story;
