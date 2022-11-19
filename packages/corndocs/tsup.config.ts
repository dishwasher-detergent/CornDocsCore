import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

const { target } = tsconfig.compilerOptions;

export default defineConfig([
  {
    name: "corndocs",
    entry: ["src/index.js"],
    format: "cjs",
    dts: false,
    target,
  },
  {
    name: "corndocs-esm",
    entry: ["src/loader.ts"],
    format: "esm",
    dts: true,
    target,
  },
]);
