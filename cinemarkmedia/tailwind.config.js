export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/img/newbanner.jpg')",
        'hero-pattern': "url('public/img/newbanner.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'sans': ["Bitter", 'serif', 'sans-serif'],
        'nunito':["Nunito", 'sans-serif'],
        "sub-content":["Open Sans","sans-serif"]
      },
    },
    
  },
  variants: {},
  plugins: [],
}