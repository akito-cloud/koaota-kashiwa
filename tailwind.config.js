/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./*.html",        // ルートのページ
    "./parts/*.html",  // パーツ読み込み用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

