import { PropsWithChildren } from 'react';
import { SectionMeta } from '../../types/resume';

/**
 * ### Section 공통 전처리기
 *
 * @description `disable` 이 true 면 렌더링하지 않고, 아니라면 목차 이동을 위한
 * `id={sectionId}` 래퍼로 감싼다. 기존 `PreProcessingComponent` 를 대체한다.
 */
export function SectionShell({ meta, children }: PropsWithChildren<{ meta: SectionMeta }>) {
  if (meta.disable) {
    return null;
  }

  return <div id={meta.sectionId}>{children}</div>;
}
