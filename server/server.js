import Express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import logger from './logger.js';

const app = Express();

const port = process.env.PORT || 8000;

const options = {
  target: 'https://619d077c68ebaa001753ce6e.mockapi.io',
  changeOrigin: true,
  pathRewrite: { '^/api/todo': '/api/v1/todo' }
};
const proxy = createProxyMiddleware(options);

app.use(logger);

app.use('/api/todo', proxy);

app.use((req, res, next) => {
  const err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { status: err.status || 500, message: err.message } });
});

app.listen(port);
