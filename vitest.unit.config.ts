// vitest.unit.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import path from "node:path";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
    viteConfig,
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
