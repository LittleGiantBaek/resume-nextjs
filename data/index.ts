import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import workExperience from './work-experience';
import projectExperience from './project-experience';
import openSource from './open-source';
import presentation from './presentation';
import article from './article';
import education from './education';
import certificate from './certificate';
import etc from './etc';
import footer from './footer';

import { ResumeData } from '../types/resume';

/**
 * ### 이력서 데이터 조립
 *
 * @description 새 섹션을 추가하려면 (1) `data/<section>.ts` 파일 생성, (2) 여기 `resume` 객체에 등록,
 * (3) 아래 `SECTION_ORDER` 에 순서 추가, (4) `components/sections/registry.tsx` 에 컴포넌트 매핑을 추가한다.
 */
export const resume: ResumeData = {
  profile,
  introduce,
  skill,
  workExperience,
  projectExperience,
  openSource,
  presentation,
  article,
  education,
  certificate,
  etc,
  footer,
};

/** `footer` 를 제외한, 목차(TOC) 이동 대상이 되는 섹션의 렌더링 순서 */
export const SECTION_ORDER = [
  'profile',
  'introduce',
  'skill',
  'workExperience',
  'projectExperience',
  'openSource',
  'presentation',
  'article',
  'education',
  'certificate',
  'etc',
] as const;

export type SectionKey = (typeof SECTION_ORDER)[number];

/** 비활성화(disable)되지 않은 섹션의 Section ID 목록. TOC 렌더링에 사용된다. */
export const sectionIds: string[] = SECTION_ORDER.map((key) => resume[key])
  .filter((section) => !section.disable)
  .map((section) => section.sectionId);
