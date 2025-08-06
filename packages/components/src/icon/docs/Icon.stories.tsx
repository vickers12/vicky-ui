import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "../src";

import { User } from "lucide-react";

const meta = {
    title: "Components/Icon",
    component: Icon,
    argTypes: {
        size: { control: "text" },
        strokeWidth: { control: "number" },
        icon: {
            control: false,
            table: { disable: true }
        }
    }
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    args: {
        icon: User
    }
} satisfies Story;
