/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 背景底色：極淺灰
        'app-bg': '#f5f5f5', 
        // 重點標示：深藍色
        'app-primary': '#1e3a8a', 
        // 一般文字：深黑色（或接近全黑的 Slate-900）
        'app-text': '#1a1a1a', 
      },
    },
  },
  plugins: [],
}