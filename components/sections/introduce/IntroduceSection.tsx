import { PropsWithChildren } from 'react';
import { IntroducePayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Badge } from '../../ui/Badge';
import { formatYearMonthDay, daysSince } from '../../../lib/date';

export default function IntroduceSection({ payload }: PropsWithChildren<{ payload: IntroducePayload }>) {
  return (
    <SectionShell meta={payload}>
      <IntroduceContent payload={payload} />
    </SectionShell>
  );
}

function IntroduceContent({ payload }: PropsWithChildren<{ payload: IntroducePayload }>) {
  const latestUpdatedByNow = daysSince(payload.latestUpdated);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-12 col-md-3">
          <h2 className="text-blue">INTRODUCE</h2>
        </div>
        <div className="col-12 col-md-9">
          {payload.contents.map((content, index) => (
            <p key={index.toString()}>{content}</p>
          ))}
          <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${formatYearMonthDay(payload.latestUpdated)} (D+${latestUpdatedByNow})`}
            </Badge>
          </p>
          <p className="text-right text-sign">{payload.sign}</p>
        </div>
      </div>
    </div>
  );
}
