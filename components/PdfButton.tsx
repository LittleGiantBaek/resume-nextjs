'use client';

/**
 * ### PDF 저장 버튼
 *
 * @description 브라우저 인쇄 다이얼로그(대상: PDF 저장)를 연다.
 * 실제 지면 최적화(문단/불릿이 페이지 경계에서 잘리지 않게)는
 * `app/globals.css` 의 `@media print` 규칙이 담당한다.
 */
export function PdfButton() {
  return (
    <button
      type="button"
      className="pdf-button no-print"
      onClick={() => window.print()}
      aria-label="이력서를 PDF로 저장"
    >
      PDF 저장
    </button>
  );
}
