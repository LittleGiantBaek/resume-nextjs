import { PropsWithChildren } from 'react';
import { RowPayload } from '../../types/resume';
import { DescriptionTree } from './DescriptionTree';

/**
 * ### 좌측 라벨 / 우측 콘텐츠 그리드 Row
 *
 * @description education / certificate / etc / presentation / open-source 공용 Row.
 * 기존 `CommonRow` 를 대체한다.
 */
export function Row({ payload, index }: PropsWithChildren<{ payload: RowPayload; index: number }>) {
  const { left, right } = payload;
  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : null}
      <div className="row">
        <div className="col-12 col-md-3 text-md-right">
          <div className="row">
            <div className="col-12">
              <h4 className="text-gray">{left.title}</h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          {right.title ? <h4>{right.title}</h4> : null}
          {right.subTitle ? <i className="text-gray">{right.subTitle}</i> : null}
          <DescriptionTree descriptions={right.descriptions} padding={isNeedDescriptionPadding} />
        </div>
      </div>
    </div>
  );
}
