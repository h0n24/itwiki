// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.js',
//   unstable_staticImage: true,
//   i18n: {
//     locales: ['cs', 'en'],
//     defaultLocale: 'cs',
//   },
// })

// module.exports = withNextra()


const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs'
  }
});

