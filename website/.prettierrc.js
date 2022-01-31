module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: [
    // React
    '^react$',
    // Docusaurus
    '^@docusaurus/(.*)$',
    '^@site/(.*)$',
    '^@theme/(.*)$',
    // Internals
    '^pages/(.*)$',
    '^components/(.*)$',
    '^utils/(.*)$',
    '^styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
