const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ['default','cs', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  async redirects() {
    return JSON.parse(
      JSON.stringify([
        {
          source: '/default',
          destination: '/cs',
          locale: false,
          permanent: false,
        },
        {
          source: '/default/(!public/):slug*',
          destination: '/cs/:slug*',
          locale: false,
          permanent: false,
        },
      ])
    );
  },
});

