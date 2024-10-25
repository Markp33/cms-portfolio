/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        default: 'url(https://hub.jmonkeyengine.org/uploads/default/original/4X/f/6/c/f6c503876de606d3f06b9547c48dda2caa252d82.png), default',
        pointer: 'url(/images/cursorPointer.png), pointer',
      }
    },
  },
  plugins: [],
}
