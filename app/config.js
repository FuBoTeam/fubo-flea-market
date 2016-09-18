require('babel-polyfill');
const config = require('config');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiUrl: config.get('apiUrl'),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Flea Market',
    description: 'Fubo flea market.',
    head: {
      titleTemplate: 'Redux Auth: %s',
      meta: [
        { name: 'description', content: '' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:locale', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:card', content: '' },
        { property: 'og:site', content: '' },
        { property: 'og:creator', content: '' },
        { property: 'og:image:width', content: '' },
        { property: 'og:image:height', content: '' },
      ],
    },
  },

}, environment);