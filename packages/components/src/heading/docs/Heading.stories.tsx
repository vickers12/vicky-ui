// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as HeadingComponents from "../index";

import { Heading, HEADING_LEVELS, HEADING_SIZES } from "../index";

const meta = {
    title: "Components/Heading",
    component: Heading,
    args: { children: "The quick brown fox jumps over the lazy dog." }
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;

/**
 * The different sizes of the heading component.
 * 'Inherit' is used to inherit the size from the parent element.
 * The other sizes are based on the vicky-ui typography type scale.
 */
export const Sizes = {
    render: (args) => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_SIZES.map((size) => (
                <Heading key={size} {...args} size={size}>
                    {size.toUpperCase()} – The quick brown fox jumps over the lazy dog.
                </Heading>
            ))}
        </div>
    )
} satisfies Story;

/**
 * The different levels of the heading component.
 */
export const Levels = {
    render: (args) => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_LEVELS.map((level) => (
                <Heading key={level} {...args} level={level}>
                    H{level} – The quick brown fox jumps over the lazy dog.
                </Heading>
            ))}
        </div>
    )
} satisfies Story;

/**
 * The different levels of the heading component.
 */
export const LevelsByTagName = {
    render: (args) => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_LEVELS.map((level) => {
                const NamedHeading = HeadingComponents[`H${level}`];
                return (
                    <NamedHeading key={level} {...args}>
                        H{level} – The quick brown fox jumps over the lazy dog.
                    </NamedHeading>
                );
            })}
        </div>
    )
} satisfies Story;
