module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-globals': ['error', 'event'],
    'no-undef': 'off',
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
  },
};
