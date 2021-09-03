const manifestJSON = require('./public/manifest.json')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  pwa: {
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
}
