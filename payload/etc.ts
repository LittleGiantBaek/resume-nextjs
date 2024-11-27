import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  sectionId: 'ADDITIONAL EXPERIENCE',
  disable: false,

  list: [
    {
      title: '클라우드 기반 ECM 제품 BackEnd 개발',
      startedAt: '2021-11',
      endedAt: '2024-10',
      descriptions: [
        {
          content: 'Tibero RDBMS 기반 DB 스키마 설계',
          descriptions: [
            {
              content: '유저 그룹 기반 보안 정책 수립(RBAC) DB 스키마 설계',
              href:
                'https://velog.io/@littlegiant/RBAC%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90',
            },
            {
              content: '문서, 폴더 엔티티 설계',
            },
          ],
        },
        {
          content: 'Spring Boot 기반 서버 구축 및 서비스 개발',
          descriptions: [
            {
              content: '파일 업로드/다운로드 서비스 개발',
              // descriptions: [
              //   {
              //     content: 'MultipartFile 파일 업로드 서비스 개발',
              //   },
              //   {
              //     content:
              //       'apache compress 라이브러리를 사용한 다중 파일 압축 및 다운로드 서비스 개발',
              //   },
              // ],
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
            // {
            //   content: 'apache pdfbox를 활용한 PDF 컨텐츠 데이터 DB화 기능 개발',
            // },
          ],
        },
        // {
        //   content: '문서 파일 무결성 검사 및 스토리지 최적화',
        //   descriptions: [
        //     {
        //       content:
        //         '문서 파일의 해시(hash) 값을 이용한 파일 무결성 검사를 구현하여 데이터 일관성 확보 및 파일 중복 저장 방지',
        //     },
        //     {
        //       content:
        //         '해시화를 통한 스토리지 자원 활용 효율화로 스토리지 용량 사용 효율성을 15% 개선',
        //       weight: 'SEMI_BOLD',
        //     },
        //   ],
        // },
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
        // {
        //   content: '대용량 파일 업로드/다운로드 기능 고도화',
        //   descriptions: [
        //     {
        //       content:
        //         'Chunk 단위 전송을 통한 대용량 파일 업로드 및 다운로드 성능 개선으로 네트워크 안정성 향상',
        //     },
        //     {
        //       content:
        //         'WebSocket을 활용하여 대용량 파일의 업로드/다운로드 과정에서 HTTP 연결 부담을 줄이고, 전송 효율을 최적화',
        //     },
        //   ],
        // },
        // {
        //   content: '실시간 데이터 처리 및 다중 유저 환경 대응',
        //   descriptions: [
        //     {
        //       content:
        //         'Kafka와 WebSocket을 통해 실시간 데이터 처리를 구현하여, 다중 유저 환경에서도 안정적인 문서 CRUD 작업 지원',
        //     },
        //     {
        //       content:
        //         '다중 사용자 환경에서 문서에 대한 변경 사항을 실시간으로 반영하여 사용자 경험 개선 및 시스템 응답 속도 최적화',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: 'Mobile Wedding Invitation',
      startedAt: '2024-08',
      endedAt: '2024-08',
      descriptions: [
        {
          content: '모바일 청첩장 링크',
          href: 'https://seungtaeyoungeunweddinginvitation.github.io/',
        },
        {
          content: '레퍼런스 디자인을 참고하여 모바일 청첩장 layout 배치 및 컴포넌트 개발',
        },
        {
          content: 'Kakao 지도, Tmap API 연동',
        },
      ],
    },
    // {
    //   title: '코인 자동매매 시스템',
    //   startedAt: '2024-01',
    //   endedAt: '2024-02',
    //   descriptions: [
    //     {
    //       content: 'PineScript 및 Binance Webhook 기능을 통해 코인 자동매매 프로그램 개발',
    //     },
    //     {
    //       content: '하이킨아시 ,  MACD 를 이용한 매매법 연구 및 구현',
    //     },
    //   ],
    // },
    {
      title: '크롤링을 통한 예약 현황 실시간 확인 시스템 ',
      startedAt: '2023-01',
      endedAt: '2023-02',
      descriptions: [
        {
          content: '사내 건강관리실 예약 현황 폴링을 위한 크롤링 서버 개발',
        },
        {
          content: 'Puppeteer를 활용한 동적 페이지 크롤링 기능 개발',
        },
        {
          content: '예약 공석 발생시 Discord알림을 위한 Webhook 기능 연동',
        },
      ],
    },
  ],
};

export default etc;
