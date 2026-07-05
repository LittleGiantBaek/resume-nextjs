import { PropsWithChildren } from 'react';
import { EtcItem, EtcPayload, RowPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { Row } from '../../ui/Row';
import { formatYearMonth } from '../../../lib/date';

export default function EtcSection({ payload }: PropsWithChildren<{ payload: EtcPayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="ADDITIONAL EXPERIENCE">
        <div className="row">
          <div className="col">
            {payload.list.map((item, index) => (
              <Row key={index.toString()} payload={serialize(item)} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </SectionShell>
  );
}

function serialize(item: EtcItem): RowPayload {
  const startedAt = formatYearMonth(item.startedAt);
  const title = item.endedAt ? `${startedAt} ~ ${formatYearMonth(item.endedAt)}` : startedAt;

  return {
    left: { title },
    right: { ...item },
  };
}
