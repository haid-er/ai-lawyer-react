// Removed ESLint-specific configurations
export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {}, // You can keep the global variables section if needed for other tools
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    // You can keep this if you plan to configure settings for other tools in the future
    settings: {},
    // No plugins or rules related to ESLint anymore
    plugins: {},
    rules: {},
  },
];
