/**
 * ### 이력서 데이터 공통 타입 정의
 *
 * @description
 * 기존 `component/**\/I*.ts` 네임스페이스들이 섹션별로 중복 정의하던
 * "기간(Period)", "좌/우 Row", "중첩 설명 불릿(Description)", "뱃지(Contact/Skill)" 구조를
 * 하나의 공통 타입 세트로 통합한다. 각 섹션 데이터는 이 타입들을 조합해 표현력을 유지한다.
 */

/** Pretendard 지원 font-weight 목록 */
export type FontWeightType =
  | 'DEFAULT'
  | 'THIN'
  | 'EXTRA_LIGHT'
  | 'LIGHT'
  | 'REGULAR'
  | 'MEDIUM'
  | 'SEMI_BOLD'
  | 'BOLD'
  | 'EXTRA_BOLD'
  | 'BLACK';

/**
 * ### 중첩 가능한 설명 불릿
 *
 * @description 여러 계층을 가지는 `<ul>` 목록을 표현하기 위해 재귀 구조로 정의한다.
 * `href` / `postHref` / `postImage` 조합으로 하이퍼링크나 후행 이미지를 붙일 수 있다.
 */
export interface Description {
  /** 설명 본문 */
  content: string;
  /** 폰트 두께. 미지정시 Pretendard 기본값(300)을 사용한다. */
  weight?: FontWeightType;
  /** 지정 시 `content` 전체가 `<a href>` 로 감싸진다. */
  href?: string;
  /** 지정 시 `content` 뒤에 이미지를 붙인다. */
  postImage?: string;
  /** 지정 시 `content` 뒤에 하이퍼링크를 붙인다. */
  postHref?: string;
  /** 한 단계 더 들어가는 하위 설명 목록 */
  descriptions?: Description[];
}

/** 각 섹션 Payload 의 공통 요소 */
export interface SectionMeta {
  /** 목차 이동을 위한 Section ID */
  sectionId: string;
  /** `true` 면 해당 섹션을 렌더링하지 않는다. */
  disable?: boolean;
}

/** `YYYY-MM` 형식의 시작/종료 기간을 갖는 공통 구조 */
export interface Period {
  /** @format YYYY-MM */
  startedAt: string;
  /** @format YYYY-MM. `undefined` 면 "진행 중"으로 간주한다. */
  endedAt?: string;
}

/** 좌측 라벨 / 우측 콘텐츠 그리드 Row 표현 (education, certificate, etc, presentation, open-source 공용) */
export interface RowPayload {
  left: {
    title: string;
  };
  right: {
    title?: string;
    subTitle?: string;
    descriptions?: Description[];
  };
}

/** 지원하는 인라인 아이콘 이름 */
export type IconName = 'email' | 'phone' | 'github' | 'blog' | 'linkedin' | 'bell' | 'question-circle';

export interface ContactItem {
  icon: IconName;
  title?: string;
  link?: string;
  /** true 면 뱃지 형태로 표시한다. */
  badge?: true;
}

export interface ProfilePayload extends SectionMeta {
  image: string;
  name: {
    title: string;
    small?: string;
  };
  contact: ContactItem[];
  notice: {
    title: string;
    icon?: IconName;
  };
}

export interface IntroducePayload extends SectionMeta {
  /** 하나의 요소가 하나의 `<p>` 가 된다. */
  contents: string[];
  sign: string;
  /** @format YYYY-MM-DD */
  latestUpdated: string;
}

export interface SkillItem {
  title: string;
  /**
   * @value 1 옅은 회색 뱃지 / 2 짙은 회색 뱃지 / 3 파란색 뱃지 / undefined 뱃지 없음
   */
  level?: 1 | 2 | 3;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface SkillPayload extends SectionMeta {
  skills: SkillGroup[];
  /** SKILL 타이틀 옆에 붙는 tooltip */
  tooltip?: string;
}

export interface WorkExperienceDescription {
  text: string;
  subDescription?: string[];
}

export interface WorkExperienceItem extends Period {
  title: string;
  position: string;
  descriptions: WorkExperienceDescription[];
  skillKeywords?: string[];
}

export interface WorkExperiencePayload extends SectionMeta {
  list: WorkExperienceItem[];
  disableTotalPeriod?: boolean;
}

export interface ProjectExperienceItem extends Period {
  title: string;
  performance: string;
  descriptions: Description[];
  skillKeywords?: string[];
}

export interface ProjectExperiencePayload extends SectionMeta {
  list: ProjectExperienceItem[];
  disableTotalPeriod?: boolean;
}

export interface OpenSourceItem {
  title: string;
  descriptions: Description[];
}

export interface OpenSourcePayload extends SectionMeta {
  list: OpenSourceItem[];
}

export interface PresentationItem {
  title: string;
  subTitle: string;
  /** @format YYYY-MM */
  at: string;
  descriptions: Description[];
}

export interface PresentationPayload extends SectionMeta {
  list: PresentationItem[];
}

export interface ArticlePayload extends SectionMeta {
  list: Description[];
}

export interface EducationItem extends Period {
  title: string;
  subTitle: string;
}

export interface EducationPayload extends SectionMeta {
  list: EducationItem[];
}

export interface CertificateItem {
  title: string;
  subTitle: string;
  /** @format YYYY-MM-DD */
  acquisitionDate: string;
}

export interface CertificatePayload extends SectionMeta {
  list: CertificateItem[];
}

export interface EtcItem extends Period {
  title: string;
  subTitle?: string;
  descriptions?: Description[];
}

export interface EtcPayload extends SectionMeta {
  list: EtcItem[];
}

export interface FooterPayload {
  github: string;
  version: string;
}

export interface OpenGraphProfile {
  firstName?: string;
  lastName?: string;
  username?: string;
  gender?: string;
}

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface SiteOpenGraph {
  title: string;
  description: string;
  type?: string;
  images?: OpenGraphImage[];
  profile?: OpenGraphProfile;
}

/** GA4 / GoatCounter 중 하나(또는 둘 다) 설정 시 layout 에서 해당 스크립트를 삽입한다. */
export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  goatcounterCode?: string;
}

export interface SiteConfig {
  headTitle: string;
  favicon: string;
  description: string;
  openGraph: SiteOpenGraph;
  analytics: AnalyticsConfig;
}

export interface ResumeData {
  profile: ProfilePayload;
  introduce: IntroducePayload;
  skill: SkillPayload;
  workExperience: WorkExperiencePayload;
  projectExperience: ProjectExperiencePayload;
  openSource: OpenSourcePayload;
  presentation: PresentationPayload;
  article: ArticlePayload;
  education: EducationPayload;
  certificate: CertificatePayload;
  etc: EtcPayload;
  footer: FooterPayload;
}
