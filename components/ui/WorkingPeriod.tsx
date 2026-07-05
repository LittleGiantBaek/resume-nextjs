import { Badge } from './Badge';
import { formatDuration, formatYearMonth } from '../../lib/date';

/**
 * ### 기간 + 재직/수행 기간 뱃지
 *
 * @description work-experience / project-experience 좌측 컬럼 공용.
 * 모바일(xs)에서는 기간(7~9칸)과 뱃지(5~3칸)를 한 줄에, 데스크톱(md+)에서는 세로로 쌓는다.
 */
export function WorkingPeriod({ startedAt, endedAt }: { startedAt: string; endedAt?: string }) {
  const isWorking = !endedAt;
  const periodTitle = isWorking
    ? `${formatYearMonth(startedAt)} ~`
    : `${formatYearMonth(startedAt)} ~ ${formatYearMonth(endedAt)}`;

  return (
    <div className="row">
      <div className={`${isWorking ? 'col-7' : 'col-9'} col-md-12`}>
        <h4 className="text-gray">{periodTitle}</h4>
      </div>
      <div className={`${isWorking ? 'col-5' : 'col-3'} col-md-12 text-md-right text-center`}>
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : null}
        <Badge color="info">{formatDuration(startedAt, endedAt)}</Badge>
      </div>
    </div>
  );
}
