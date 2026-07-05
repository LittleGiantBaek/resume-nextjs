import { PropsWithChildren } from 'react';
import { ProjectExperiencePayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { ProjectExperienceRow } from './ProjectExperienceRow';

export default function ProjectExperienceSection({ payload }: PropsWithChildren<{ payload: ProjectExperiencePayload }>) {
  return (
    <SectionShell meta={payload}>
      <ProjectExperienceContent payload={payload} />
    </SectionShell>
  );
}

function ProjectExperienceContent({ payload }: PropsWithChildren<{ payload: ProjectExperiencePayload }>) {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <div className="row pb-3">
            <div className="col">
              <h2 className="text-blue">PROJECT EXPERIENCE</h2>
            </div>
          </div>
          {payload.list.map((item, index) => (
            <ProjectExperienceRow key={index.toString()} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
