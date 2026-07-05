import { PropsWithChildren } from 'react';
import { PresentationItem, PresentationPayload, RowPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { Row } from '../../ui/Row';
import { formatYearMonth } from '../../../lib/date';

export default function PresentationSection({ payload }: PropsWithChildren<{ payload: PresentationPayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="PRESENTATION">
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

function serialize(item: PresentationItem): RowPayload {
  return {
    left: { title: formatYearMonth(item.at) },
    right: { ...item },
  };
}
