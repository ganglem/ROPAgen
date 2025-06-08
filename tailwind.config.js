const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',  // <-- Add this line to enable class-based dark mode
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"p22-mackinac-pro"', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
};
