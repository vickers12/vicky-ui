import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": resolve(__dirname, "./packages/components/src"),
            "@tokens": resolve(__dirname, "./packages/tokens/src"),
            "@vicky-ui/test-utils": resolve(__dirname, "./test-utils"),
            "^.+\\.module\\.css$": "/test-utils/__mocks__/styleMock.ts"
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "VickyUI",
            fileName: (format) => `vicky-ui.${format}.js`,
            formats: ["es", "umd"]
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        },
        sourcemap: true,
        minify: "esbuild"
    }
});
