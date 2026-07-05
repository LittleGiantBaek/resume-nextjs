import { PropsWithChildren } from 'react';
import { EducationItem, EducationPayload, RowPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { Row } from '../../ui/Row';
import { formatYearMonth } from '../../../lib/date';

export default function EducationSection({ payload }: PropsWithChildren<{ payload: EducationPayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="EDUCATION">
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

function serialize(item: EducationItem): RowPayload {
  const startedAt = formatYearMonth(item.startedAt);
  const endedAt = item.endedAt ? formatYearMonth(item.endedAt) : ' ';

  return {
    left: { title: `${startedAt} ~ ${endedAt}` },
    right: { ...item },
  };
}
