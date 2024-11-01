import { IProjectExperience } from '../component/projectExperience/IProjectExperience';

const experience: IProjectExperience.Payload = {
  sectionId: 'PROJECT EXPERIENCE',
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '클라우드 기반 ECM 제품 고도화',
      startedAt: '2023-01',
      endedAt: '2024-10',
      performance: 'hash화를 통한 스토리지 가용 용량 효율성 15% 확보',
      descriptions: [
        {
          content: '1. 문서 파일의 hash화를 통한 파일 무결성 체크 및 운영 환경 스토리지 최적화',
        },
        {
          content: '2. PL/SQL을 통한 Batch 쿼리 20% 성능 개선',
        },
        {
          content: '3. 대용량 파일의 Chunk 단위 업로드/다운로드를 통한 드라이브 기능의 고도화',
        },
        {
          content: '4. Kafka를 이용한 실시간 데이터 처리 적용',
        },
        {
          content: '5. Electron 앱 기능 개발을 통한 플랫폼 의존도 감소 및 사용자 경험 향상',
        },
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
      title: '클라우드 기반 ECM 제품 FrontEnd/BackEnd 개발',
      startedAt: '2021-11',
      endedAt: '2023-01',
      performance:
        '적극적인 VOC 대응을 통해 서울시교육청, 육군본부, 농어촌공사에 제품을 납품 및 운영  ‘GS 인증’ 획득',
      descriptions: [
        {
          content: '1. 중기부 과제 진행을 위한 제안서 작성 및 구조 설계 참여',
          descriptions: [
            {
              content:
                '[TIPA 구매조건부 과제 : 클라우드 기반 지능형 문서관리 시스템 구축 (S3199585)]',
            },
          ],
        },
        {
          content:
            '2. 유저 그룹 기반 보안 정책 수립(RBAC) 및 DB 스키마 설계를 통한 인가 서비스 개발',
        },
        {
          content: '3. 파일 업로드/다운로드 기능 설계 및 구현',
        },
        {
          content: '4. 비정형 데이터의 DB 저장 관리 기술 연구 및 적용',
          descriptions: [
            {
              content: 'Office 문서의 DB화를 위한 핵심 기능 개발',
              descriptions: [
                { content: 'OOXML 스펙 기반 문서데이터 parser 및 writer 모듈 개발' },
                { content: 'Formula Parsing을 위한 Java compiler 개발 (javacc, pegjs) ' },
              ],
            },
            {
              content: 'PDF 컨텐츠 데이터 DB화 기능 개발',
            },
          ],
        },
        {
          content: '5. 육군본부, 서울시 교육청 사업 납품 및 GS 인증 획득',
        },
      ],
    },
    {
      title: '이미지 스트리밍 방식 WebOffice Mobile 웹앱 개발',
      startedAt: '2021-07',
      endedAt: '2021-10',
      performance:
        '모바일 웹뷰 환경에서의 이벤트 핸들링 경험 및 제한 사항 해결 과정을 통한 지식 습득',
      descriptions: [
        {
          content: '1. hammer.js 를 통한 사용자 제스쳐 이벤트 핸들링 처리',
        },
        {
          content: '2. 모바일 Canvas 사이즈 제한 해결을 위한 이미지 타일링 방식 설계 및 개발 ',
        },
      ],
    },
    {
      title: '이미지 스트리밍 방식 WebOffice FrontEnd/BackEnd 개발',
      startedAt: '2019-01',
      endedAt: '2021-06',
      performance:
        '제품의 초기 설계를 통한 프로토타입 개발부터 안정화까지 완료 및 로컬 Office 프로그램 기능의 90% 기능 제공. ',
      descriptions: [
        {
          content: '1. epoll을 통한 이벤트 디스패칭 구조 및 초기 제품 아키텍쳐 설계 및 개발',
        },
        {
          content:
            '2. 사용자로부터 전달된 Input 이벤트를 시스템(TOS)의 이벤트 메세지 형태로 컨버팅 작업 및 다수 유저 대응 설계 및 개발',
        },
        {
          content: '3. 이미지 인코딩 최적화를 통한 메모리 효율 및 동시 접속 효율 향상',
          descriptions: [
            {
              content: '기존 단일 유저 접속 환경에서 동시 접속 대응을 위해 30명 동시 접속 안정화',
            },
          ],
        },
        {
          content: '4. 클립보드 기능 안정화를 위한 Chrome Extension 개발',
          href: 'https://chrome-stats.com/d/eloangiofjdhgipcjbkpmaecgdcikjdh',
        },
        {
          content: '5. 우정본 , 디브레인, SPC 사업 납품',
        },
      ],
    },
  ],
};

export default experience;
