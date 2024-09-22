/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#67399D',
        purplebg: '#8A2BE2',
        yellow: '#F1D80C',
        peach: '#F66364',
        pale: '#F6F8F3',
        paleGray: '#DADADA',
        darkbg: '#000000b0',
        purple: '#67399D',
        gold: '#F8E231',
        silver: '#C7C5B8',
        bronze: '#A87900',
        gray: '#555555',
        mgray: '#D6D1D5',
        lgray: '#F8F7F8',
        green: '#03543F',
        lgreen: '#DEF7EC',
        orange: '#ED8936',
        lorange: '#FEEBC8',
        Hgrey: '#E5E5E5',
        Dpurple: '#0A0612',
        Lpurple: '#8A2BE2',
        Mpurple: '#471675',
        Darkpurple: '#7321BF',
        // For Admin Panel
        'input-bg': '#FAFAFA',
        'gray-1': '#F6F8F3',
        'purple-1': '#8A2BE2',
        'purple-trasparent': '#8a2be214',
      },
    },
  },
  plugins: [],
};