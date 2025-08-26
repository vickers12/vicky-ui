// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Div } from "../../html-elements/elements";
import { Flex } from "../src";

const meta = {
    title: "Components/Flex",
    component: Flex,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Flex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
        </Flex>
    )
} satisfies Story;

export const AlignItems = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args} style={{ height: "10rem" }}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
        </Flex>
    ),
    args: {
        alignItems: "center",
        columnGap: "inline-md"
    }
} satisfies Story;

export const JustifyContent = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args} style={{ height: "10rem" }}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            ></Div>
        </Flex>
    ),
    args: {
        justifyContent: "space-between"
    }
} satisfies Story;

export const AlignContent = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args} style={{ height: "10rem" }}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
        </Flex>
    ),
    args: {
        alignContent: "space-around",
        wrap: "wrap"
    }
} satisfies Story;

export const Direction = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
        </Flex>
    ),
    args: {
        direction: "column"
    }
} satisfies Story;

export const Wrap = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-300)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-400)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-500)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-600)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-700)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-800)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-900)"
                }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-100)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-200)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-300)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-400)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-500)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-600)" }}
            ></Div>
            <Div
                style={{ width: "4rem", height: "4rem", backgroundColor: "var(--vui-keppel-700)" }}
            ></Div>
        </Flex>
    ),
    args: {
        wrap: true
    }
} satisfies Story;

export const Inline = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args}>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-100)"
                }}
            ></Div>
            <Div
                style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--vui-bittersweet-200)"
                }}
            ></Div>
        </Flex>
    ),
    args: {
        inline: true
    }
} satisfies Story;
