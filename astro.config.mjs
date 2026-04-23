import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://Milieth.github.io',
  base: 'gamedev-portofolio',
  vite: {
    plugins: [tailwindcss()]
  },
});
