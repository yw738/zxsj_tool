import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import plugin from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    plugin(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
        VantResolver(),
      ],
    }),

    AutoImport({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
    proxy: {
      // "/api": {
      //   target,
      //   secure: false,
      // },
      "/devApi": {
        // target: "https://scspcba-mall.cn/pcba",
        // target: "http://43.154.73.243:5209",
        target: "http://localhost:5209/",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp("^/devApi"), ""),
      },
    },

    // https: {
    //     key: fs.readFileSync(keyFilePath),
    //     cert: fs.readFileSync(certFilePath),
    // }
  },
});
