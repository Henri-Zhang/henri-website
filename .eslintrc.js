module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'warn',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',

    'vue/no-unused-components': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
