module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
