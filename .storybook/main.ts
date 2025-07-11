import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../packages/**/*.stories.@(ts|tsx)"],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-docs"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    }
};
export default config;
