const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/',
    proxy({
      target: 'https://daytonasystems.in',
      changeOrigin: true,
    })
  );
};