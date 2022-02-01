module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: [
    // React
    '^react$',
    // Other libraries
    '<THIRD_PARTY_MODULES>',
    // Internals
    'components/(.*)$',
    'utils/(.*)$',
    '_internals/(.*)$',
    '^[./]',
    // '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
