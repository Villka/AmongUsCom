const { createProxyMiddleware } = require('http-proxy-middleware');
const config = {
  is_localhost: process.env.IS_LOCALHOST === 'true' ? true : false,
  url: 'http://amongcommunity.com',
  local_url: 'http://localhost:3000'
}
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: config.is_localhost ? config.local_url : config.url,
      changeOrigin: true,
    })
  );

  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: config.is_localhost ? config.local_url : config.url,
      changeOrigin: true,
    })
  );
};