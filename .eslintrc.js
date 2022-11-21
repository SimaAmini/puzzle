module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'class-methods-use-this': 'off',
    eqeqeq: 'off',
    'func-names': ['error', 'never'],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        ignore: ['app_shell', 'app_lib', 'shared', 'mfe'],
      },
    ],
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    radix: 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
