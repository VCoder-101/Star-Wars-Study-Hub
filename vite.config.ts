import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Star-Wars-Study-Hub/" : "/",
});
