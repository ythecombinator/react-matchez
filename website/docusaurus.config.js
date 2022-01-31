const { resolve } = require('path');

module.exports = {
  title: 'react-matchez',
  tagline: 'Declarative, typed, pattern matching for React',
  url: 'https://github.com/ythecombinator/react-match',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ythecombinator',
  projectName: 'react-matchez',
  plugins: [
    // Enables TailwindCSS + postcss
    'docusaurus-tailwindcss',
    // Enables absolute imports
    function () {
      return {
        name: 'docusaurus-module-path',
        configureWebpack() {
          return {
            resolve: {
              modules: [resolve(__dirname, 'src'), 'node_modules'],
            },
          };
        },
      };
    },
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'not-production-ready',
      content: '🚨 react-matchez is not production-ready at this point.',
      backgroundColor: '#f44336',
      textColor: 'white',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      //   title: "react-matchəz",
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBaseRegex: 'docs(/)?$',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/api',
          label: 'API',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          to: 'sadsadassd',
          label: 'Demo',
          className:
            'btn mr-2 px-6 py-2 text-white font-bold uppercase bg-blue-600 hover:text-white hover:bg-blue-700',
          position: 'right',
        },
        {
          href: 'https://github.com/ythecombinator/react-match',
          className: 'mr-2 header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `MIT © ${new Date().getFullYear()} - Matheus Albuquerque`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/styles/custom.css')],
        },
        gtag: {
          trackingID: '',
        },
      },
    ],
  ],
};
