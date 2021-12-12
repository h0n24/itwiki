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
  async redirects() {
    return [
      {
        source: '/default',
        destination: '/en',
        locale: false,
        permanent: false,
      },
      {
        source: '/default/:slug*',
        destination: '/en/:slug*',
        locale: false,
        permanent: false,
      },
    ]
  }
});

