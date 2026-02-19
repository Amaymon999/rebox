import { describe, expect, it } from 'vitest';

import { trackEvent } from '@/lib/analytics';

describe('analytics', () => {
  it('does not throw for known events', () => {
    expect(() => trackEvent('view_home', { source: 'test' })).not.toThrow();
  });
});
