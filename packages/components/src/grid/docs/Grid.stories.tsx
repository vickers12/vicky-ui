// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Div, type DivProps } from "../../html-elements/elements";
import { Grid } from "../src";

const meta = {
    title: "Components/Grid",
    component: Grid,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Grid>;
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
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
        </Grid>
    ),
    args: {
        autoFlow: "column"
    }
} satisfies Story;

export const Areas = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)", gridArea: "a" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)", gridArea: "b" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)", gridArea: "c" }} />
        </Grid>
    ),
    args: {
        areas: ["a a", "b c"]
    }
} satisfies Story;

export const AutoColumns = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)", gridColumn: 2 }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
        </Grid>
    ),
    args: {
        autoColumns: "1fr"
    }
} satisfies Story;

export const ColumnSpanning = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-400)",
                    gridColumn: "1 / span 3",
                    gridRow: 3
                }}
            />
        </Grid>
    ),
    args: {
        gap: "stack-md",
        templateColumns: ["1fr", "1fr", "1fr"]
    }
} satisfies Story;

export const FitContent = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-100)",
                    padding: "var(--vui-vui-space-inline-sm)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-200)",
                    padding: "var(--vui-vui-space-inline-sm)"
                }}
            />
            <Square
                style={{
                    backgroundColor: "var(--vui-bittersweet-300)",
                    padding: "var(--vui-vui-space-inline-sm)"
                }}
            />
        </Grid>
    ),
    args: {
        templateColumns: ["fit-content(10rem)", "fit-content(10rem)", "1fr"],
        alignItems: "center",
        gap: "stack-md"
    }
} satisfies Story;

export const Gap = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-400)" }} />
        </Grid>
    ),
    args: {
        templateColumns: ["1fr", "1fr"],
        gap: "stack-md"
    }
} satisfies Story;

export const Nesting = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Grid templateColumns={["8rem", "auto"]}>
                <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
                <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            </Grid>
            <Grid templateColumns={["auto", "9rem"]}>
                <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
                <Square style={{ backgroundColor: "var(--vui-bittersweet-400)" }} />
            </Grid>
        </Grid>
    ),
    args: {
        templateColumns: ["1fr", "1fr"],
        gap: "stack-md"
    }
} satisfies Story;

export const Repeat = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-400)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-500)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-600)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-700)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-800)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-900)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-300)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-400)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-500)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-600)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-700)" }} />
            <Square style={{ backgroundColor: "var(--vui-keppel-800)" }} />
        </Grid>
    ),
    args: {
        templateColumns: "repeat(auto-fit, 3rem)",
        gap: "stack-md"
    }
} satisfies Story;

export const TemplateColumns = {
    render: (args: ComponentProps<typeof Grid>) => (
        <Grid {...args}>
            <Square style={{ backgroundColor: "var(--vui-bittersweet-100)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-200)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-300)" }} />
            <Square style={{ backgroundColor: "var(--vui-bittersweet-400)" }} />
        </Grid>
    ),
    args: {
        templateColumns: ["5rem", "10rem", "1fr"]
    }
} satisfies Story;
