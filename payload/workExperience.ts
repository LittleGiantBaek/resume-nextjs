import { IWorkExperience } from '../component/workExperience/IWorkExperience';

const experience: IWorkExperience.Payload = {
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
        {
          text: '클라우드 기반 ECM 제품 서버/클라이언트 아키텍쳐 설계 & FrontEnd/BackEnd 기능 개발',
          subDescription: [
            '문서 중앙화를 통해 효율적인 관리와 보안을 제공하는 클라우드 ECM 솔루션',
          ],
        },
        {
          text: '배달공제회, 서울시 교육청, 육군본부, 농어촌공사 사업 납품 및 VOC 대응',
          subDescription: [
            'TIPA 구매조건부 과제 : 클라우드 기반 지능형 문서관리 시스템 구축 (S3199585)',
            'GS 인증 획득',
          ],
        },
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
            '로컬 오피스 프로그램 기능셋 대비 90% 기능 제공',
          ],
        },
        {
          text: '미래에셋, 디브레인, 케리스, SPC 사업 납품 및 요구사항 대응',
        },
      ],
    },
  ],
};

export default experience;
