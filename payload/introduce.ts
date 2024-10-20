import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  sectionId: 'INTRODUCE',
  disable: false,

  contents: [
    '주니어 개발자로서 시스템 및 응용 소프트웨어 개발을 통해 실무 경험을 쌓았고, 현재는 6년 차 웹 개발자로서 폭넓은 분야에 대해 학습하며 지속적으로 성장하고 있습니다. 시니어 개발자로서 본인의 개발 업무뿐만 아니라 팀원들의 코드 리뷰를 통해 사이드 이펙트에 대한 인사이트를 제시하고 피드백하며 협업하였습니다. 또한, 제품 및 프로젝트의 전반적인 내용을 깊이 이해하고 문제를 능동적으로 찾아내어 해결책을 제시할 수 있는 개발자가 되기 위해 노력하고 있으며, 팀장의 부재 시에는 팀장 대행으로서 팀의 리딩 역할을 대신 수행해 왔습니다.',
    '비효율적인 과정을 줄이고, 업무의 효율을 높이는 것을 중요하게 생각합니다. 반복적인 작업과 인수인계의 효율성을 높이기 위해 반복적인 업무를 자동화하고, 성능과 유지보수를 고려한 코드를 작성하고자 끊임없이 노력해 왔습니다. 이를 통해 매일 더 나은 개발자가 되기 위해 고민하며, 작은 변화들이 큰 혁신으로 이어질 수 있음을 실천하고 있습니다.',
    '개발자로서의 성장은 개인뿐만 아니라 팀과 회사의 성장에도 크게 기여한다고 믿습니다. 여러 프로젝트를 진행하며 얻은 경험을 통해 끊임없이 배우고, 더 나은 방향을 모색하고자 합니다. 이를 위해 팀 내 학습 스터디를 주관하며 지식을 쌓아가고 있으며, 현재의 문제를 단순히 해결하는 것을 넘어 문제를 찾아내고 대안을 제시할 수 있는 개발자로 성장하고 있습니다.',
  ],
  sign: 'SeungHyun Baek',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
