module.exports = {
  purge: [],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
