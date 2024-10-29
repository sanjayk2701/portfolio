/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#eb5424',   // Custom background color
        navTextColor: '#000000', // Custom navbar text color
        titleColor: '#303030',   // Custom title color
        textColor: '#606060',    // Custom text color (added missing '#')
        secondaryTextColor:'#F2F4F7',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #eb5424 1%, #D14B20 40%, #B8421C 90%)',
      },
      
    },
  },
  plugins: [],
};
