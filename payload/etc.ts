import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  sectionId: 'ADDITIONAL EXPERIENCE',
  disable: false,

  list: [
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
    {
      title: '코인 자동매매 시스템',
      startedAt: '2024-01',
      endedAt: '2024-02',
      descriptions: [
        {
          content: 'PineScript 및 Binance Webhook 기능을 통해 코인 자동매매 프로그램 개발',
        },
        {
          content: '하이킨아시 ,  MACD 를 이용한 매매법 연구 및 구현',
        },
      ],
    },
    {
      title: '크롤링을 통한 예약 현황 실시간 확인 시스템 ',
      startedAt: '2023-01',
      endedAt: '2023-02',
      descriptions: [
        {
          content: '사내 건강관리실 예약 현황 폴링을 위한 크롤링 서버 개발',
        },
        {
          content: '크롤링을 위한 모듈 분석 및 사용',
        },
        {
          content: '예약 공석 발생시 Discord알림을 위한 Webhook 기능 연동',
        },
      ],
    },
  ],
};

export default etc;
