import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  sectionId: 'WORK EXPERIENCE',
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '티맥스 가이아',
      position: '팀원/시니어 연구 개발자',
      startedAt: '2020-08',
      endedAt: '2024-10',
      descriptions: [
        { text: '클라우드 기반 ECM 제품 아키텍쳐 설계 & 사용자/관리자 기능 개발' },
        { text: 'Java Spring Framework를 이용한 RESTful 웹 서비스 개발' },
        { text: 'PL/SQL을 활용한 데이터베이스 커넥션 최적화' },
        { text: '테스트 코드 & 코드 리뷰 & 아키텍처 개선을 통한 개발 환경 개선' },
        { text: '배달공제회, 서울시 교육청, 육군본부, 농어촌공사 사업 납품' },
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'TypeScript',
        'React',
        'Kafka',
        'Tibero',
        'Kubernetes',
      ],
    },
    {
      title: '티맥스 A&C',
      position: '팀원/주니어 연구 개발자',
      startedAt: '2019-01',
      endedAt: '2020-07',
      descriptions: [
        {
          text: '이미지 스트리밍 방식의 Web Office 서버 아키텍쳐 설계 & FrontEnd/BackEnd 기능 개발',
          subDescription: [
            '로컬 오피스 프로그램을 서버에서 구동시켜 웹 환경에서 문서편집을 가능하게 하는 렌더링 서버',
          ],
        },
        {
          text:
            '제품 초기 설계 참여, 다중 유저 접속 환경 대응 세션 관리, 메모리 관리 및 성능 고도화',
        },
        {
          text:
            'HyperCloud(Kubernetes 기반 클라우드 플랫폼) , Docker, Gitlab Runner 를 통해 CI/CD 자동화 처리',
        },
        { text: '미래에셋, 디브레인, 케리스, SPC 사업 납품' },
      ],
      skillKeywords: ['C', 'C++', 'JavaScript', 'Tibero', 'Kubernetes'],
    },
  ],
};

export default experience;
