/** @type {import('tailwindcss').Config} */

const primaryColors = {
  "50": "#eff6ff",
  "100": "#dbeafe",
  "200": "#bfdbfe",
  "300": "#93c5fd",
  "400": "#60a5fa",
  "500": "#3b82f6",
  "600": "#2563eb",
  "700": "#1d4ed8",
  "800": "#1e40af",
  "900": "#1e3a8a",
  "950": "#172554"
}

const secondaryColors = {
  "50": "#fef2f2",
  "100": "#fee2e2",
  "200": "#fecaca",
  "300": "#fca5a5",
  "400": "#f87171",
  "500": "#ef4444",
  "600": "#dc2626",
  "700": "#b91c1c",
  "800": "#991b1b",
  "900": "#7f1d1d",
  "950": "#450a0a"
}

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primary':primaryColors,
          'secondary':secondaryColors
        }
      },
    },
    plugins: [],
  }