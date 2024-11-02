import { IProjectExperience } from '../component/projectExperience/IProjectExperience';

const experience: IProjectExperience.Payload = {
  sectionId: 'PROJECT EXPERIENCE',
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '클라우드 기반 ECM 제품 FrontEnd 고도화',
      startedAt: '2023-01',
      endedAt: '2024-10',
      performance: '-',
      descriptions: [
        {
          content: '반응형 UI 최적화 및 접근성 개선',
          descriptions: [
            {
              content:
                '다양한 디바이스와 해상도에서 일관된 사용자 경험 제공을 위해 반응형 디자인 적용 및 최적화',
            },
            {
              content:
                '웹 접근성 표준을 준수하여 WAI-ARIA 속성을 추가하고, 화면 읽기 프로그램(Screen Reader) 호환성을 개선하여 접근성 강화',
            },
          ],
        },
        {
          content: '무한 스크롤 기능 추가를 통한 사용자 경험 개선',
          descriptions: [
            {
              content:
                '무한 스크롤을 통한 데이터 로딩 최적화로 페이지 로딩 속도 개선 및 사용자 경험 강화',
            },
            {
              content:
                '가상 스크롤(Virtual Scrolling) 기법을 도입하여 대량 데이터 렌더링 시 메모리 사용량을 줄이고 스크롤 성능을 최적화',
            },
          ],
        },
        {
          content: '랜딩 페이지 성능 최적화',
          descriptions: [
            {
              content: 'React lazy loading, suspense 및 code splitting 적용을 통해',
            },
            {
              content: '썸네일 이미지 최적화를 통해 ',
            },
          ],
        },
      ],
      skillKeywords: ['JavaScript', 'TypeScript', 'React', 'Mobx', 'Websocket'],
    },
    {
      title: '클라우드 기반 ECM 제품 BackEnd 고도화',
      startedAt: '2023-01',
      endedAt: '2024-10',
      performance: '-',
      descriptions: [
        {
          content: '문서 파일 무결성 검사 및 스토리지 최적화',
          descriptions: [
            {
              content:
                '문서 파일의 해시(hash) 값을 이용한 파일 무결성 검사를 구현하여 데이터 일관성 확보 및 파일 중복 저장 방지',
            },
            {
              content:
                '해시화를 통한 스토리지 자원 활용 효율화로 스토리지 용량 사용 효율성을 15% 개선',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: 'PL/SQL을 활용한 Batch 쿼리 성능 최적화',
          descriptions: [
            {
              content:
                '대규모 데이터 처리에 최적화된 Batch 쿼리 적용 및 PL/SQL 성능 개선으로 쿼리 실행 속도 20% 향상',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: '대용량 파일 업로드/다운로드 기능 고도화',
          descriptions: [
            {
              content:
                'Chunk 단위 전송을 통한 대용량 파일 업로드 및 다운로드 성능 개선으로 네트워크 안정성 향상',
            },
            {
              content:
                'WebSocket을 활용하여 대용량 파일의 업로드/다운로드 과정에서 HTTP 연결 부담을 줄이고, 전송 효율을 최적화',
            },
          ],
        },
        {
          content: '실시간 데이터 처리 및 다중 유저 환경 대응',
          descriptions: [
            {
              content:
                'Kafka와 WebSocket을 통해 실시간 데이터 처리를 구현하여, 다중 유저 환경에서도 안정적인 문서 CRUD 작업 지원',
            },
            {
              content:
                '다중 사용자 환경에서 문서에 대한 변경 사항을 실시간으로 반영하여 사용자 경험 개선 및 시스템 응답 속도 최적화',
            },
          ],
        },
      ],
      skillKeywords: ['Spring Boot', 'Kafka', 'PL/SQL'],
    },
    {
      title: '클라우드 기반 ECM 제품 FrontEnd 아키텍쳐 설계 및 개발',
      startedAt: '2021-11',
      endedAt: '2023-01',
      performance: '-',
      descriptions: [
        {
          content: 'React + MobX 기반의 MVVM 패턴 적용 프로젝트 구축',
        },
        {
          content: '사용자 인터페이스 개발',
          descriptions: [
            { content: '제품 랜딩 페이지 개발' },
            { content: '관리자 설정 페이지 개발' },
          ],
        },
        {
          content: '공통 컴포넌트 및 모듈 개발을 통해 사용자 경험 및 개발자 경험 개선',
          descriptions: [
            {
              content:
                '주요 UI Wrapping 컴포넌트(툴팁, 다이얼로그, 토스트 메시지, 드롭다운) 개발을 통해 일관된 사용자 경험 제공',
            },
            { content: '제품 내 공통 컴포넌트 재사용률 90% 이상 향상을 통해 개발 속도 개선' },
          ],
        },
        {
          content: 'CI/CD 자동화 파이프라인 구축',
          descriptions: [
            { content: 'GitLab Runner를 활용한 스크립트 기반 자동 빌드 및 배포 프로세스 구현' },
          ],
        },
        {
          content: 'Mock 테스트 환경 구축을 통한 컴포넌트 이슈 발생률 50% 감소',
          descriptions: [
            { content: 'Jest와 Mock 컴포넌트를 이용한 Unit 및 Integration 테스트 환경 구축' },
            {
              content: '테스트 커버리지 80% 이상 유지를 통해 기능 안정성 확보',
              weight: 'SEMI_BOLD',
            },
          ],
        },
      ],
      skillKeywords: ['TypeScript', 'React', 'Mobx'],
    },
    {
      title: '클라우드 기반 ECM 제품 BackEnd 아키텍쳐 설계 및 서비스 개발',
      startedAt: '2021-11',
      endedAt: '2023-01',
      performance: ' - ',
      descriptions: [
        {
          content: 'Tibero RDBMS 기반 DB 스키마 설계',
          descriptions: [
            {
              content: '유저 그룹 기반 보안 정책 수립(RBAC) DB 스키마 설계',
            },
            {
              content: '문서, 폴더 엔티티 설계',
            },
          ],
        },
        {
          content: 'Spring Boot 서버 구축 및 서비스 개발',
          descriptions: [
            {
              content: '파일 업로드/다운로드 서비스 개발',
              descriptions: [
                {
                  content: 'MultipartFile 파일 업로드 서비스 개발',
                },
                {
                  content:
                    'apache compress 라이브러리를 사용한 다중 파일 압축 및 다운로드 서비스 개발',
                },
              ],
            },
            {
              content: '유저의 문서 접근에 대한 인가 서비스 개발',
            },
          ],
        },
        {
          content: '비정형 데이터의 DB 저장 관리 기술 연구 및 적용',
          descriptions: [
            {
              content: 'Office 문서의 DB화를 위한 핵심 기능 개발',
              descriptions: [
                { content: 'OOXML 스펙 기반 문서데이터 parser 및 writer 모듈 개발' },
                { content: 'Formula Parsing을 위한 Parser 개발 (javacc, pegjs) ' },
              ],
            },
            {
              content: 'apache pdfbox를 활용한 PDF 컨텐츠 데이터 DB화 기능 개발',
            },
          ],
        },
      ],
      skillKeywords: ['Java', 'Spring Boot', 'Tibero', 'MyBatis'],
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
      skillKeywords: ['React Native', 'WebSocket', 'HTML/CSS'],
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
            '2. 사용자로부터 전달된 Input 이벤트를 OS의 이벤트 메세지 형태로 컨버팅 작업 및 다수 유저 대응 설계 및 개발',
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
      skillKeywords: ['C++', 'vanilla JS', 'WebSocket', 'HTML/CSS'],
    },
  ],
};

export default experience;
