import { PropsWithChildren } from 'react';
import { WorkExperiencePayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Badge } from '../../ui/Badge';
import { formatTotalDuration } from '../../../lib/date';
import { WorkExperienceRow } from './WorkExperienceRow';

export default function WorkExperienceSection({ payload }: PropsWithChildren<{ payload: WorkExperiencePayload }>) {
  return (
    <SectionShell meta={payload}>
      <WorkExperienceContent payload={payload} />
    </SectionShell>
  );
}

// 여기는 기간 표시, Skill Keywords 같은 특이 요소가 있어서 공용 Section/Row 로 못바꾸지 않을까..
function WorkExperienceContent({ payload }: PropsWithChildren<{ payload: WorkExperiencePayload }>) {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <div className="row pb-3">
            <div className="col">
              <h2 className="text-blue">
                WORK EXPERIENCE{' '}
                {payload.disableTotalPeriod ? null : (
                  <span style={{ fontSize: '50%' }}>
                    <Badge color="secondary">{formatTotalDuration(payload.list)}</Badge>
                  </span>
                )}
              </h2>
            </div>
          </div>
          {payload.list.map((item, index) => (
            <WorkExperienceRow key={index.toString()} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
