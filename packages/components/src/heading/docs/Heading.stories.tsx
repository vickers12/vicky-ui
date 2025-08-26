// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";

import { H1, H2, H3, H4, H5, H6, Heading, HEADING_LEVELS, HEADING_SIZES } from "../index";

const byLevel = { 1: H1, 2: H2, 3: H3, 4: H4, 5: H5, 6: H6 } as const;

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
    render: args => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_SIZES.map(size => (
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
    render: args => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_LEVELS.map(level => (
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
    render: args => (
        <div style={{ display: "grid", gap: "0.5rem", fontSize: "1.2rem" }}>
            {HEADING_LEVELS.map(level => {
                const NamedHeading = byLevel[level];

                return (
                    <NamedHeading key={level} {...args}>
                        H{level} – The quick brown fox jumps over the lazy dog.
                    </NamedHeading>
                );
            })}
        </div>
    )
} satisfies Story;
