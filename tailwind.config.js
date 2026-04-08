/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 根據您提供的色卡進行定義
        'nsic-deep': '#0A2540',    // Prussian Blue (用於深色背景或標題文字)
        'nsic-dusk': '#2C5282',    // Dusk Blue (用於次要文字或深藍強調)
        'nsic-azure': '#174EA6',   // Steel Azure (主要的強調色，用於圖標、按鈕、線條)
        'nsic-alice': '#E6F0FA',   // Alice Blue (用於區塊或卡片的淡色背景)
      },
    },
  },
  plugins: [],
}