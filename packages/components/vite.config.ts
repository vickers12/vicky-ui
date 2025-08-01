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
            "@vicky-ui/components": resolve(__dirname, "./src"),
            "@vicky-ui/test-utils": resolve(__dirname, "../../test-utils")
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "VickyUI",
            fileName: "index",
            formats: ["es"]
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
    },
    css: {
        modules: {
            localsConvention: "dashes"
        }
    }
});
