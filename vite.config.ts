import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import { prismjsPlugin } from 'vite-plugin-prismjs';
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false,
    }),
    prismjsPlugin({
      languages: ['css'],
      //  languages: 'all',
    }),
  ],
  css: {
    // modules: {
    //   generateScopedName: '[name]__[local]__[hash:base64:5]',
    //   hashPrefix: 'predix',
    // },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
      },
    },
    postcss: {
      plugins: [postcssPresetEnv()], // 可以直接写postcssPresetEnv 不要任何配置
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: /^node_modules\/.*/,
    },
  },
});

// const themeVariables = lessToJS(
//   fs.readFileSync(resolve(__dirname, './src/variables.less'), 'utf8')
// )

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     vitePluginImp({
//       optimize: true,
//       libList: [
//         {
//           libName: 'antd',
//           libDirectory: 'es',
//           style: (name) => `antd/es/${name}/style`
//         }
//       ]
//     }),
//   ],
//   css: {
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true, // 支持内联 JavaScript
//         modifyVars: themeVariables, // 重写 less 变量，定制样式
//       }
//     }
//   },
//   server: {
//     port: 3001, // 开发环境启动的端口
//     proxy: {
//       '/api': {
//         // 当遇到 /api 路径时，将其转换成 target 的值
//         target: 'http://127.0.0.1:3333/api',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//     }
//   }
// })
