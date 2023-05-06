module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/button-has-type': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react-hooks/exhaustive-deps': 0,
  },
}
