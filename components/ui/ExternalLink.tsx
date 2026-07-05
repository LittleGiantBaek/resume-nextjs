import { PropsWithChildren } from 'react';

/** 새 탭에서 여는 외부 링크. 기존 `HrefTargetBlank` 를 대체한다. */
export function ExternalLink({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
}
