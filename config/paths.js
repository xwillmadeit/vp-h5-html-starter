const { resolve } = require('path')

const resolveApp = relativePath => resolve(process.cwd(), relativePath)

module.exports = {
  appBuild: resolveApp('build'),
  appFavicon: resolveApp('src/images/favicon.ico'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/js/index.js'),
  flexibleJs: resolveApp('src/js/flexible.js'),
  appNodeModules: resolveApp('node_modules')
}
