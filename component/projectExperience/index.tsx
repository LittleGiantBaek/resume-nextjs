import { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import { IProjectExperience } from './IProjectExperience';
import ProjectExperienceRow from './projectRow';

type Payload = IProjectExperience.Payload;

export const ProjectExperience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>PROJECT EXPERIENCE</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ProjectExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
