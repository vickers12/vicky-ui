// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../index.ts";

const meta = {
    title: "Components/Text",
    component: Text,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;

/**
 * The different sizes of the text component.
 * 'Inherit' is used to inherit the size from the parent element.
 * The other sizes are based on the vicky-ui typography type scale.
 */
export const Sizes = {
    render: (args) => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {TEXT_SIZES.map((size) => (
                <Text key={size} {...args} size={size}>
                    {size.toUpperCase()} – The quick brown fox jumps over the lazy dog.
                </Text>
            ))}
        </div>
    )
} satisfies Story;

/**
 * The different weights of the text component.
 * 'Inherit' is used to inherit the weight from the parent element.
 * The other weights are based on the vicky-ui typography type scale.
 */
export const Weights = {
    render: (args) => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {TEXT_WEIGHTS.map((weight) => (
                <Text key={weight} {...args} weight={weight}>
                    {weight.toUpperCase()} – The quick brown fox jumps over the lazy dog.
                </Text>
            ))}
        </div>
    )
} satisfies Story;
