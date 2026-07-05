import { PropsWithChildren } from 'react';
import { ProjectExperienceItem } from '../../../types/resume';
import { Badge } from '../../ui/Badge';
import { DescriptionTree } from '../../ui/DescriptionTree';
import { WorkingPeriod } from '../../ui/WorkingPeriod';

export function ProjectExperienceRow({ item, index }: PropsWithChildren<{ item: ProjectExperienceItem; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : null}
      <div className="row">
        <div className="col-12 col-md-3 text-md-right">
          <WorkingPeriod startedAt={item.startedAt} endedAt={item.endedAt} />
        </div>
        <div className="col-12 col-md-9">
          <h4>{item.title}</h4>
          <i className="text-gray">{item.performance}</i>
          <DescriptionTree descriptions={item.descriptions} padding={false} />
          {item.skillKeywords ? <SkillKeywords keywords={item.skillKeywords} /> : null}
        </div>
      </div>
    </div>
  );
}

function SkillKeywords({ keywords }: PropsWithChildren<{ keywords: string[] }>) {
  return (
    <div className="skill-keywords">
      <strong>Skill Keywords</strong>
      <div>
        {keywords.map((keyword, index) => (
          <Badge className="skill-keyword-badge mr-1" key={index.toString()} color="warning">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}
