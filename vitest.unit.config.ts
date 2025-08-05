// vitest.unit.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import { loadConfigFromFile } from "vite";
import path, { resolve } from "path";

export default async () => {
    // 👇 Load the Vite config for the component package
    const componentViteConfig = await loadConfigFromFile(
        {
            command: "serve",
            mode: "test"
        },
        resolve(__dirname, "packages/components/vite.config.ts")
    );

    return mergeConfig(
        componentViteConfig?.config ?? {},
        defineConfig({
            test: {
                globals: true,
                environment: "jsdom",
                css: true,
                setupFiles: ["./vitest.setup.ts"]
            },
            resolve: {
                alias: {
                    "@vicky-ui/components": path.resolve(__dirname, "packages/components/src"),
                    "@vicky-ui/tokens": path.resolve(__dirname, "packages/tokens/src")
                }
            }
        })
    );
};
