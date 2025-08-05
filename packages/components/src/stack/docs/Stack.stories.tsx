// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../src";
import { Div, DivProps } from "../../html-elements/elements";
import type { ComponentProps } from "react";

const meta = {
    title: "Components/Stack",
    component: Stack,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Stack>;
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
    render: (args: ComponentProps<typeof Stack>) => (
        <Stack {...args}>
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
        </Stack>
    )
} satisfies Story;

export const AlignX = {
    render: (args: ComponentProps<typeof Stack>) => (
        <Stack {...args}>
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
        </Stack>
    ),
    args: {
        alignX: "center"
    }
} satisfies Story;

export const AlignY = {
    render: (args: ComponentProps<typeof Stack>) => (
        <Stack {...args}>
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
        </Stack>
    ),
    args: {
        alignY: "flex-end"
    }
} satisfies Story;

export const Reverse = {
    render: (args: ComponentProps<typeof Stack>) => (
        <Stack {...args}>
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
        </Stack>
    ),
    args: {
        reverse: true
    }
} satisfies Story;
