import { renderHook } from '@testing-library/react';

import { useTranslate } from './useTranslate.hook';
import { Translations } from './useTranslate.data';

describe('useTranslate', () => {
  it('render', async () => {
    const { result } = renderHook(() => {
      return useTranslate();
    });

    expect(result.current.passwordLength).toEqual(
      Translations.en.passwordLength,
    );
  });
});
