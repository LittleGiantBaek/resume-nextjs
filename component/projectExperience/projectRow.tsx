import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IProjectExperience } from './IProjectExperience';
import { CommonDescription } from '../common/CommonDescription';

export default function ProjectExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IProjectExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.performance}</i>
          <CommonDescription descriptions={item.descriptions} option={{ padding: false }} />
          {createSkillKeywords(item.skillKeywords)}
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <div>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            // color="success"
            color="warning"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
        endedAt: undefined,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}
