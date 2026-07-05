import { PropsWithChildren } from 'react';

/**
 * ### 타이틀 + 여백을 갖는 공통 섹션 레이아웃
 *
 * @description education / certificate / etc / article / presentation / open-source 처럼
 * "파란 타이틀 + Row 목록" 패턴을 쓰는 섹션에서 사용한다. 기존 `CommonSection` 을 대체한다.
 */
export function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <div className="row pb-3">
            <div className="col">
              <h2 className="text-blue">
                <span>{title}</span>
              </h2>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
