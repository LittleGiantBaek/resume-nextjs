import { PropsWithChildren } from 'react';
import { CertificateItem, CertificatePayload, RowPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { Row } from '../../ui/Row';
import { formatYearMonthDay } from '../../../lib/date';

export default function CertificateSection({ payload }: PropsWithChildren<{ payload: CertificatePayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="CERTIFICATE">
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

function serialize(item: CertificateItem): RowPayload {
  return {
    left: { title: formatYearMonthDay(item.acquisitionDate) },
    right: { ...item },
  };
}
