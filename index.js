module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/standard',
    'plugin:flowtype/recommended',
  ],
  plugins: ['import', 'prettier', 'standard', 'flowtype'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 100, ignoreUrls: true }],
  },
}
