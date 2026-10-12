import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages: repository "portohasan.github.io" adalah user/organization site,
// sehingga situs dilayani di root domain (https://portohasan.github.io/).
// Karena itu base URL = "/". (Jika nama repo lain, misal "porto", ganti jadi "/porto/".)
const base = "/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Generate the homepage as static HTML so GitHub Pages can serve it.
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/"],
    },
    server: { entry: "server" },
  },
});
