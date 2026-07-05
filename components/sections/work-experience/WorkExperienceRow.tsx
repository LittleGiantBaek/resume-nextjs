import { PropsWithChildren } from 'react';
import { WorkExperienceItem } from '../../../types/resume';
import { Badge } from '../../ui/Badge';
import { WorkingPeriod } from '../../ui/WorkingPeriod';

export function WorkExperienceRow({ item, index }: PropsWithChildren<{ item: WorkExperienceItem; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : null}
      <div className="row">
        <div className="col-12 col-md-3 text-md-right">
          <WorkingPeriod startedAt={item.startedAt} endedAt={item.endedAt} />
        </div>
        <div className="col-12 col-md-9">
          <h4>{item.title}</h4>
          <i className="text-gray">{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>
                {description.text}
                {description.subDescription ? (
                  <ul>
                    {description.subDescription.map((subDesc, subDescIndex) => (
                      <li key={subDescIndex.toString()}>{subDesc}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            {item.skillKeywords ? <SkillKeywords keywords={item.skillKeywords} /> : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SkillKeywords({ keywords }: PropsWithChildren<{ keywords: string[] }>) {
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {keywords.map((keyword, index) => (
          <Badge className="skill-keyword-badge mr-1" key={index.toString()} color="secondary">
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}
