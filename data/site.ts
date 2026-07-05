import { SiteConfig } from '../types/resume';

const title = 'Seunghyun Baek Resume | Developer Portfolio';
const description = "Seunghyun Baek's career portfolio and resume as a developer.";

/**
 * ### 사이트 전역 메타 설정
 *
 * @description
 * 기존 `payload/_global.ts` 를 대체한다. `analytics` 필드에 값이 설정되면
 * `app/layout.tsx` 에서 해당 스크립트(GA4 또는 GoatCounter)를 삽입하고,
 * 비워두면(`undefined`) 아무 스크립트도 렌더링하지 않는다.
 */
export const site: SiteConfig = {
  headTitle: title,
  favicon: '/favicon.ico',
  description,
  openGraph: {
    title,
    description,
    type: 'profile',
    images: [
      {
        url: '/preview.jpg',
        width: 800,
        height: 600,
        alt: 'OpenGraph Image Sample.png',
      },
    ],
    profile: {
      firstName: 'Seunghyun',
      lastName: 'Baek',
      username: 'LittleGiantBaek',
      gender: 'male',
    },
  },
  analytics: {
    googleAnalyticsId: undefined,
    goatcounterCode: undefined,
  },
  // TODO: 인쇄(PDF) 시 페이지가 어색하게 나뉘는 부분(보이는 부분) 개선 후 다시 켜기
  showPdfButton: false,
};
