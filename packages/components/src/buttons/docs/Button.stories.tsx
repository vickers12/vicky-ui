// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../src";

const meta = {
    title: "Components/Button",
    component: Button,
    args: { children: "Button" }
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;
