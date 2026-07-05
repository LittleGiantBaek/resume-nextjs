<div align="center">
  <img src="https://github.com/uyu423/resume-nextjs/raw/master/logo.jpg" alt="Resume Next.js Logo">
</div>

# Resume Next.js

- Next.js **App Router** (v16) + React 19 + TypeScript 로 작성된 정적 이력서.
- 정적 export(`output: 'export'`) 산출물을 `docs/` 디렉토리에 담아 GitHub Pages 로 서빙한다.
- Live: https://littlegiantbaek.github.io/

## 요구사항

- Node.js 22.x (`.nvmrc` 참고, `nvm use` 로 맞출 수 있다)
- pnpm (`corepack enable pnpm` 또는 `npm i -g pnpm`)

## 시작하기

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## 프로젝트 구조

```
app/
  layout.tsx        # 폰트/analytics 스크립트/Metadata(SEO) 를 담당하는 Root Layout
  page.tsx           # 섹션 레지스트리를 순회하며 렌더링하는 단일 페이지
  globals.css        # 전역 스타일 + 최소 그리드/유틸리티 CSS
components/
  ui/                # Section, Row, DescriptionTree, Badge, ExternalLink, Icon 등 공통 UI
  sections/          # profile, introduce, skill, work-experience, ... 섹션별 컴포넌트
  toc/               # 우측 고정 TOC(목차) 도트 네비게이션
data/
  index.ts           # 이력서 데이터 조립 + 섹션 렌더링 순서(SECTION_ORDER) 관리
  site.ts            # 사이트 메타(title, SEO, favicon, analytics)
  profile.ts, introduce.ts, skill.ts, work-experience.ts, ...  # 섹션별 실제 데이터
types/
  resume.ts          # 이력서 데이터 공통 타입
public/              # 이미지, favicon 등 정적 리소스
scripts/
  postexport.mjs     # next build(export) 이후 docs/ 로 복사 + .nojekyll/CNAME 생성
```

## 이력 업데이트 방법

1. `data/*.ts` 파일만 수정한다. 이력서 문구, 기간, 스킬, 링크 등 모든 콘텐츠가 이 폴더에 있다.
   - 특정 섹션을 숨기고 싶다면 해당 파일의 `disable: true` 로 설정한다.
   - 섹션 순서를 바꾸고 싶다면 `data/index.ts` 의 `SECTION_ORDER` 배열 순서를 바꾼다.
   - 상단 "Latest Updated" 배지는 `data/introduce.ts` 의 `latestUpdated` 날짜를 갱신하면 반영된다.
   - 페이지 title / OpenGraph(카카오톡·슬랙 미리보기) 등 SEO 정보는 `data/site.ts` 에서 수정한다.
   - 새 섹션을 추가하려면 (1) `types/resume.ts` 에 타입 추가 → (2) `data/<section>.ts` 작성 →
     (3) `data/index.ts` 의 `resume`/`SECTION_ORDER` 에 등록 → (4) `components/sections/<section>/`
     컴포넌트 작성 → (5) `components/sections/registry.tsx` 에 매핑을 추가한다.
2. `pnpm run export` 를 실행한다. `docs/` 디렉토리가 최신 빌드로 갱신된다.
   - 배포 전 결과물을 미리 보려면 `npx serve docs` (또는 `python3 -m http.server -d docs 8000`) 로 확인한다.
3. 변경된 `docs/` 를 포함해 커밋 & push 하면 GitHub Pages 에 반영된다.

```bash
pnpm run export
git add -A
git commit -m "chore: 이력 업데이트"
git push
```

## PDF 저장

화면 우측 하단의 **PDF 저장** 버튼을 누르면 브라우저 인쇄 다이얼로그가 열리고, 대상에서 "PDF로 저장"을
선택하면 된다. 버튼은 `data/site.ts` 의 `showPdfButton: false` 로 숨길 수 있다 (숨겨도 브라우저 인쇄
`Cmd/Ctrl+P` 로 동일한 인쇄 최적화가 적용된다). `app/globals.css` 의 `@media print` 규칙이 지면을 최적화한다:

- 지면 폭과 무관하게 항상 데스크톱 레이아웃(사진/기간 좌측 컬럼)으로 인쇄된다.
- 문단·불릿·Skill Keywords 뱃지가 페이지 경계에서 잘리지 않는다.
- 항목 제목만 페이지 하단에 남는 것(고아 제목)을 방지한다.
- TOC·PDF 버튼 등 화면 전용 요소는 인쇄물에서 제외된다 (`no-print` 클래스).
- 뱃지 배경색은 브라우저의 "배경 그래픽" 옵션과 무관하게 유지된다 (`print-color-adjust: exact`).

## Analytics 설정 방법

`data/site.ts` 의 `analytics` 필드에 값을 채우면 `app/layout.tsx` 가 자동으로 해당 스크립트를 삽입한다.
아무 값도 설정하지 않으면(`undefined`) 어떤 analytics 스크립트도 렌더링하지 않는다.

```ts
// data/site.ts
export const site: SiteConfig = {
  // ...
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // GA4 사용 시
    goatcounterCode: 'my-code',        // GoatCounter 사용 시 (https://my-code.goatcounter.com)
  },
};
```

두 값 모두 선택 사항이며, 필요한 것만 채우면 된다.

## Sub Path(서브 경로) 호스팅

`https://<user>.github.io/<repo>` 처럼 서브 경로를 가지는 경우 `package.json` 의 `homepage` 값을
해당 URL로 설정하면 `next.config.ts` 가 자동으로 `basePath`/`assetPrefix` 를 적용한다.

## Export / GitHub Pages 배포

```bash
pnpm run export
```

- 내부적으로 `docs/`, `.next/`, `out/` 를 정리한 뒤 `next build` (output: 'export') 로 `out/` 을 생성하고,
  `scripts/postexport.mjs` 가 이를 `docs/` 로 복사하면서 `docs/.nojekyll` 을 만든다.
- `package.json` 의 `homepage` 가 `*.github.io` 도메인이면 `docs/CNAME` 을 생성하지 않고,
  커스텀 도메인으로 보이면 자동으로 `docs/CNAME` 을 생성한다.

> **현재 실제 배포 방식**: 라이브 사이트(https://littlegiantbaek.github.io/)는 이 저장소가 아니라
> 별도 저장소 [`LittleGiantBaek.github.io`](https://github.com/LittleGiantBaek/LittleGiantBaek.github.io)
> 의 `main` 브랜치 루트에서 서빙된다. 따라서 배포하려면 `docs/` 의 내용을 해당 저장소 루트에 복사해서 push 해야 한다.
>
> ```bash
> pnpm run export
> cp -R docs/. ../LittleGiantBaek.github.io/   # Pages 저장소 로컬 경로에 맞게 조정
> cd ../LittleGiantBaek.github.io && git add -A && git commit -m "deploy" && git push
> ```

## 기술 스택

- Next.js 16 (App Router, `output: 'export'`)
- React 19 / TypeScript 5
- pnpm (`packageManager` 필드로 버전 고정)
- CSS Modules + 순수 CSS (외부 UI 프레임워크 의존성 없음)
- ESLint 9 (Flat Config, `eslint-config-next`) + Prettier

## Contributors

- [Yowu (uyu423)](https://github.com/uyu423)
- [Dal-ya](https://github.com/Dal-ya)
- [Taeyeong Kim (lizard-kim)](https://github.com/lizard-kim)
- [Taeyang Jin (heli-os)](https://github.com/heli-os)
- [Hyogeun Oh (Zerohertz)](https://github.com/Zerohertz)
- [Seunghyun Baek (LittleGiantBaek)](https://github.com/LittleGiantBaek)

## License

MIT
