/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Messapia', 'Helvetica'],
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'Messapia',
                    fontWheight: '400',
                    src: 'url(/fonts/messapia/Messapia-Regular.otf)',
                },
            })
        }),
        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'Messapia',
                    fontWheight: '700',
                    src: "url(/fonts/messapia/Messapia-Bold.otf) format('otf')",
                },
            })
        }),
    ],
}
