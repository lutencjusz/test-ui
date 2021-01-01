/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'baseui'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'baseui/deprecated-theme-api': 'warn',
    'baseui/deprecated-component-api': 'warn',
    'baseui/no-deep-imports': 'warn',
  },
};
