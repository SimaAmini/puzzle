module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@core': './src/core',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@services': './src/services',
        },
      },
    ],
  ],
};
