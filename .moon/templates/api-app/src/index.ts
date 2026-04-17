import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    message: 'Hello!',
  });
});

app.get('/health', (c) => {
  return c.json({ status: 'ok' });
});

export default app;
