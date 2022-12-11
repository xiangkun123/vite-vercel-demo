import { defineConfig } from 'vite'

// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path'
import react from '@vitejs/plugin-react'

// 引入windicss
import windiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录,当需要把index.html移入src时使用
  // root: path.join(__dirname, 'src'),
  plugins: [react(), windiCSS()],
})
