import { PropsWithChildren } from 'react';
import { ArticlePayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Section } from '../../ui/Section';
import { DescriptionTree } from '../../ui/DescriptionTree';

export default function ArticleSection({ payload }: PropsWithChildren<{ payload: ArticlePayload }>) {
  return (
    <SectionShell meta={payload}>
      <Section title="ARTICLE">
        <div className="row">
          <div className="col">
            <DescriptionTree descriptions={payload.list} />
          </div>
        </div>
      </Section>
    </SectionShell>
  );
}
