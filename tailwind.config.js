module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    fontFamily: {
        // 'sans': ['Raleway', 'sans-serif'],
        // 'serif': ['LobsterTwo', 'serif'],
    },
    colors: {
          transparent: 'transparent',
          current: 'currentColor',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  options: {
    whitelist: ['py-24'],
  }
}
