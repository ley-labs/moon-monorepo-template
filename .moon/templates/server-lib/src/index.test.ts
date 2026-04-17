import { describe, it, expect } from 'vitest';
import { serverOnly } from './index';

describe('{{ projectName }}-server', () => {
  it('should return server message', () => {
    expect(serverOnly()).toBe('This code only runs on the server');
  });
});
