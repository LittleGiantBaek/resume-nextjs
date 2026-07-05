'use client';

import { useLayoutEffect } from 'react';

/**
 * ### 최초 진입시 URL 해시 제거
 *
 * @description TOC 앵커 클릭 등으로 남은 `#해시` 를 최초 로드 시 주소창에서 제거한다.
 * 기존 `pages/index.tsx` 의 `useLayoutEffect` 로직을 대체한다.
 */
export function HashCleaner() {
  useLayoutEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return null;
}
