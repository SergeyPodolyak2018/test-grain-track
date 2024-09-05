import { expect, it, describe } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useAbout } from '../src/hooks/useAbout';

describe('useAbout', () => {
  it('should return a default data', () => {
    const { result } = renderHook(() => useAbout());
    expect(result.current.status).toBe('loading');
  });
});
