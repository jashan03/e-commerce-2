/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#3B5999',
        'instagram-pink': '#E4405F',
        'twitter-blue': '#55ACEE',
        'pinterest-red': '#E60023',
        'customPink': '#f8f4f4',
      },
      screens: {
        'mobile': {'max': '380px'},
      },
      backgroundImage: {
        'firefly-bg': "url('/newsImage.jpg')",
      },
      
    },
  },
 
  plugins: [],
}

