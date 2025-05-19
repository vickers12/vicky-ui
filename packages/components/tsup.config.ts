import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ["./src/index.(ts|tsx)", "./src/**/src/**/*.(ts|tsx)"],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'], // avoids bundling React
});