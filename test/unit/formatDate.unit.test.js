import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/utils/formatDate';

describe('formatDate', () => {
  it('formate correctement une date au format jj/mm/aaaa', () => {
    expect(formatDate('2024-08-20T10:00:00.000Z')).toBe('20/08/2024');
  });
});
