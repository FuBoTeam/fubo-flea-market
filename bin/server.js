#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const piping = require('piping');
const webpackIsomorphicToolsCfg = require('../webpack/webpack-isomorphic-tools');
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (global.__DEVELOPMENT__) {
  if (!piping({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.[s]?css$)/i,
  })) {
    return;
  }
}

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  webpackIsomorphicToolsCfg
)
  .development(global.__DEVELOPMENT__)
  .server(rootDir, () => {
    require('../app/server');
  });