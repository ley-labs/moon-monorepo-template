import { describe, expect, it } from 'vitest';
import app from './index';

describe('Auth API', () => {
  it('Should return 200 and hello message', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ message: 'Hello!' });
  });
});
