/**
 * ### `YYYY-MM` / `YYYY-MM-DD` 날짜 포맷 유틸
 *
 * @description 기존 `luxon` 의존성을 제거하기 위해 필요한 최소 기능만 순수 함수로 재구현했다.
 * 모든 함수는 UTC 가 아닌 로컬 자정 기준 `Date` 를 사용한다(기존 luxon 동작과 동일).
 */

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

/** `YYYY-MM` 문자열을 해당 월 1일 자정의 `Date` 로 변환한다. */
function parseYearMonth(value: string): Date {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1, 1);
}

/** `YYYY-MM-DD` 문자열을 자정의 `Date` 로 변환한다. */
function parseYearMonthDay(value: string): Date {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * `YYYY-MM` -> `YYYY. MM`
 *
 * @description 연도와 월 사이는 NBSP(` `)로 연결해 좁은 지면(인쇄 등)에서도
 * "2024.<줄바꿈>10" 처럼 날짜 내부가 꺾이지 않게 한다. 줄바꿈은 `~` 앞뒤 일반 공백에서만 일어난다.
 */
export function formatYearMonth(value: string): string {
  const date = parseYearMonth(value);
  return `${date.getFullYear()}. ${pad2(date.getMonth() + 1)}`;
}

/** `YYYY-MM-DD` -> `YYYY. MM. DD` */
export function formatYearMonthDay(value: string): string {
  const date = parseYearMonthDay(value);
  return `${date.getFullYear()}. ${pad2(date.getMonth() + 1)}. ${pad2(date.getDate())}`;
}

function diffInMonths(from: Date, to: Date): number {
  return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
}

/**
 * ### 기간(개월수)을 년/월로 환산
 *
 * @description 종료월까지 "포함"하기 위해 종료월에 1개월을 더한 뒤 시작월과의 차이를 구한다
 * (기존 `Util.getFormattingDuration` 의 `to.plus({ month: 1 }).diff(from)` 로직과 동일).
 * `endedAt` 이 없으면 오늘 날짜를 기준으로 계산한다("재직/진행 중").
 */
export function getDurationParts(startedAt: string, endedAt?: string): { years: number; months: number } {
  const start = parseYearMonth(startedAt);
  const endBase = endedAt ? parseYearMonth(endedAt) : new Date();
  const end = new Date(endBase.getFullYear(), endBase.getMonth() + 1, 1);

  const totalMonths = diffInMonths(start, end);
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
}

/** `y년 M개월` (1년 미만이면 `M개월`) */
export function formatDuration(startedAt: string, endedAt?: string): string {
  const { years, months } = getDurationParts(startedAt, endedAt);
  return years > 0 ? `${years}년 ${months}개월` : `${months}개월`;
}

/** 여러 기간의 총합을 `총 y년 M개월` 형태로 반환한다. */
export function formatTotalDuration(periods: { startedAt: string; endedAt?: string }[]): string {
  const totalMonths = periods.reduce((sum, { startedAt, endedAt }) => {
    const { years, months } = getDurationParts(startedAt, endedAt);
    return sum + years * 12 + months;
  }, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return years > 0 ? `총 ${years}년 ${months}개월` : `총 ${months}개월`;
}

/** 오늘과 기준일 사이의 경과 일수(D+N 표기용) */
export function daysSince(value: string): number {
  const date = parseYearMonthDay(value);
  return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
}
