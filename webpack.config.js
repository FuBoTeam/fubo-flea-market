const exp = (process.env.NODE_ENV === 'production') ? require('./webpack.config.prod') : require('./webpack.config.dev');

module.exports = exp;