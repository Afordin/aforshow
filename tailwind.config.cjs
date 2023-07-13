/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Messapia', 'Helvetica'],
                Inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
