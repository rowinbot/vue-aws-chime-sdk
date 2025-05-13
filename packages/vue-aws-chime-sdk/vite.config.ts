import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";

import { extname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";

// No-entry point build: https://rollupjs.org/configuration-options/#input
const entries = Object.fromEntries(
  glob
    .sync("lib/**/*.{ts,tsx,vue}", {
      ignore: ["lib/**/*.d.ts"],
    })
    .map((file) => {
      let fileName = file;
      const ext = extname(file);

      if (ext !== ".vue") {
        fileName = fileName.slice(0, fileName.length - ext.length);
      }

      return [
        // Entry point name, e.g lib/nested/foo.ts -> nested/foo
        relative("lib", fileName),
        fileURLToPath(new URL(file, import.meta.url)),
      ];
    })
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  build: {
    lib: {
      entry: entries,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // For UMD build externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
