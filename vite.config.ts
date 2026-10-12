import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base URL untuk GitHub Pages (repo: portohasan.github.io).
const base = "/portohasan.github.io/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Buat halaman utama sebagai HTML statis agar bisa dilayani GitHub Pages.
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/"],
    },
    server: { entry: "server" },
  },
});
