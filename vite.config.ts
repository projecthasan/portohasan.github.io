import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const base =
  process.env.GITHUB_ACTIONS && repository && !repository.endsWith(".github.io")
    ? `/${repository}/`
    : "/";

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
