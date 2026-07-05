import { PropsWithChildren } from 'react';
import { SkillPayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { InfoTooltip } from '../../ui/Tooltip';
import { SkillRow } from './SkillRow';

export default function SkillSection({ payload }: PropsWithChildren<{ payload: SkillPayload }>) {
  return (
    <SectionShell meta={payload}>
      <SkillContent payload={payload} />
    </SectionShell>
  );
}

function SkillContent({ payload }: PropsWithChildren<{ payload: SkillPayload }>) {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <div className="row pb-3">
            <div className="col">
              <h2>
                <span className="text-blue">SKILL</span>
                {payload.tooltip ? <InfoTooltip content={payload.tooltip} /> : null}
              </h2>
            </div>
          </div>
          {payload.skills.map((skill, index) => (
            <SkillRow key={index.toString()} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
