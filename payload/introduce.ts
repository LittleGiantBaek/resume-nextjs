import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  sectionId: 'INTRODUCE',
  disable: false,

  contents: [
    '다양한 기술 스택을 경험한 6년 차 웹 개발자입니다. 시니어 개발자로서 본인의 개발 업무뿐만 아니라 팀원들의 코드 리뷰를 통해 인사이트를 제시하고 피드백하며 협업하였습니다. 제품 및 프로젝트의 전반적인 구조를 이해하고 문제를 능동적으로 찾아내어 해결책을 제시할 수 있는 개발자가 되기 위해 노력하고 있으며, 팀장의 부재 시에는 팀장 대행으로서 팀의 리딩 역할을 대신 수행해 왔습니다.',
    '업무의 효율을 높이는 것을 중요하게 생각합니다. 반복적인 작업과 인수인계의 효율성을 높이기 위해 업무를 자동화하고, 성능과 유지보수를 고려한 코드를 작성하는 방법을 고민했습니다.',
    '개발자로서의 성장은 개인뿐만 아니라 회사의 성장에도 크게 기여한다고 생각합니다. 지속적인 성장을 위해 사이드 프로젝트와 스터디를 통해 새로운 기술과 문제 해결 방식을 탐구하고 있습니다.',
    '개발자는 현실 속 다양한 문제에 해답을 제시하는 해결사라고 생각합니다. 문제를 단순히 해결하는 것을 넘어 문제를 찾아내고 대안을 제시할 수 있는 개발자로 성장하는 것을 목표로 하고 있습니다.',
  ],
  sign: 'SeungHyun Baek',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
