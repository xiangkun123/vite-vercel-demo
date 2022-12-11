import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  // 可以用 props 的方式去定义样式属性
  attributify: true,
  // flex-c 等价于后面三个类名
  shortcuts: {
    "flex-c": "flex justify-center items-center"
  }
})