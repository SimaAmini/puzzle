module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './src/assets',
          '@configs': './src/configs',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@layout': './src/layout',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
