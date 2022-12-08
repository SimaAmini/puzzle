module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  tabWidth: 2,
  arrowParens: 'always',
  trailingComma: 'all',
  bracketSpacing: true,
  singleQuote: true,
  semi: true,
  useTabs: false,
  printWidth: 80,
  importOrder: [
    '^react',
    '^react-native',
    '^react-hook-form',
    '<THIRD_PARTY_MODULES>',
    '^@navigation/(.*)$',
    '^@core/(.*)$',
    '^@(assets|screens)/.*$|^@constants.*$',
    '^@(?:services|mapper)/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['jsx'],
};
