import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { base } from "./src/utils/consts";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tsconfigPaths()],
})
