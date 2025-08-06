import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../packages/**/*.stories.@(ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-vitest", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false
            },
            // Filter out third-party props from node_modules except lucide-react packages.
            propFilter: (prop) =>
                prop.parent ? !/node_modules\/(?!lucide-react)/.test(prop.parent.fileName) : true
        }
    }
};
export default config;
