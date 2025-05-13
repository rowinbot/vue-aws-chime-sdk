import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { extname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import glob from "fast-glob";

// No-entry point build: https://rollupjs.org/configuration-options/#input
const entries = Object.fromEntries(
  glob
    .sync("lib/**/*.{ts,tsx,vue}", {
      ignore: ["lib/**/*.d.ts"],
    })
    .map((file) => [
      // Entry point name, e.g lib/nested/foo.ts -> nested/foo
      relative("lib", file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "tsconfig.lib.json",
      include: ["lib"],
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: entries,
      formats: ["es", "cjs"],
      name: "@rowinbot/vue-aws-chime-sdk",
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
