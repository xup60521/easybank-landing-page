/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                public: ["Public Sans", "sans-serif"]
            },
            colors: {
                dark_blue: "hsl(233, 26%, 24%)",
                lime_green: "hsl(136, 65%, 51%)",
                bright_cyan: "hsl(192, 70%, 51%)",
                grayish_blue: "hsl(233, 8%, 62%)",
                light_grayish_blue: "#f4f5f7",
                very_light_gray: "#fafafa",
            }
        },
    },
    plugins: [],
}

