export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'var(--transparent)',
      'white': 'var(--white)',
      'gray-light': 'var(--gray-light)',
      'tertiary': 'var(--tertiary)',
      'secondary': 'var(--secondary)',
      'primary': 'var(--primary)',
      'primary-dark': 'var(--primary-dark)',
      'logo-color': 'var(--logo-color)',
      'danger': 'var(--danger-color)'
    },
  },
  plugins: [],
}