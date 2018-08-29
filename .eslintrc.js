module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['components', 'containers'],
      },
    ],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['**/*.stories.js'],
      },
    ],
  },
};
