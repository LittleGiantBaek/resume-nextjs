import { PropsWithChildren } from 'react';
import { OpenSourceItem, OpenSourcePayload, RowPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { Row } from '../../ui/Row';

export default function OpenSourceSection({ payload }: PropsWithChildren<{ payload: OpenSourcePayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="OPEN SOURCE">
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

function serialize(item: OpenSourceItem): RowPayload {
  return {
    left: { title: item.title },
    right: { descriptions: item.descriptions },
  };
}
