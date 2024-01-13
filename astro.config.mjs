import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), solidJs(), UnoCSS({ injectReset: true })],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
});
