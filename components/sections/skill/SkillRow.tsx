import { PropsWithChildren } from 'react';
import { SkillGroup, SkillItem } from '../../../types/resume';
import { Badge, BadgeColor } from '../../ui/Badge';

/**
 * ### 기술 뱃지 3단 목록
 *
 * @description 기존 구현은 `window.innerWidth` 를 감지해 모바일에서 단일 목록으로 다시 렌더링했지만,
 * 3분할된 목록을 이어붙이면 항목 순서가 그대로 유지되므로(`col-md-4` + 모바일에서 `col-12` 로 쌓임)
 * CSS 브레이크포인트만으로 동일한 결과를 얻을 수 있다. 불필요한 client 훅을 제거해 하이드레이션
 * 불일치 위험도 없앴다.
 */
export function SkillRow({ skill, index }: PropsWithChildren<{ skill: SkillGroup; index: number }>) {
  const columns = splitIntoColumns(skill.items, 3);

  return (
    <div>
      {index > 0 ? <hr /> : null}
      <div className="row">
        <div className="col-12 col-md-3 text-md-right">
          <h4 className="text-gray">{skill.category}</h4>
        </div>
        <div className="col-12 col-md-9">
          <div className="row mt-2 mt-md-0">
            {columns.map((items, columnIndex) => (
              <div className="col-12 col-md-4" key={columnIndex.toString()}>
                <ul>
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex.toString()}>
                      {renderLevelBadge(item.level)}
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function splitIntoColumns(items: SkillItem[], columnCount: number): SkillItem[][] {
  const splitPoint = Math.ceil(items.length / columnCount);
  const columns: SkillItem[][] = [];

  for (let i = 0, splitAfter = splitPoint; i < columnCount; i += 1, splitAfter += splitPoint) {
    columns.push(items.slice(splitAfter - splitPoint, i === columnCount - 1 ? undefined : splitAfter));
  }

  return columns;
}

function renderLevelBadge(level?: SkillItem['level']) {
  if (!level) {
    return null;
  }

  const colorByLevel: Record<1 | 2 | 3, BadgeColor> = {
    3: 'primary',
    2: 'secondary',
    1: 'light',
  };

  return (
    <span>
      <Badge pill color={colorByLevel[level]}>
        {level}
      </Badge>{' '}
    </span>
  );
}
