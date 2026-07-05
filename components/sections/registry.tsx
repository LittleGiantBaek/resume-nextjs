import { Fragment, ReactElement } from 'react';
import { resume, SECTION_ORDER, SectionKey } from '../../data';
import ProfileSection from './profile/ProfileSection';
import IntroduceSection from './introduce/IntroduceSection';
import SkillSection from './skill/SkillSection';
import WorkExperienceSection from './work-experience/WorkExperienceSection';
import ProjectExperienceSection from './project-experience/ProjectExperienceSection';
import OpenSourceSection from './open-source/OpenSourceSection';
import PresentationSection from './presentation/PresentationSection';
import ArticleSection from './article/ArticleSection';
import EducationSection from './education/EducationSection';
import CertificateSection from './certificate/CertificateSection';
import EtcSection from './etc/EtcSection';

/**
 * ### 섹션 레지스트리
 *
 * @description 새 섹션을 추가/제거하거나 순서를 바꾸려면 이 파일과 `data/index.ts` 의
 * `SECTION_ORDER` 만 수정하면 된다. 각 엔트리는 자신의 payload 타입과 짝지어 이미 렌더링된
 * `ReactElement` 로 정의되므로(지연 호출이 아님) 섹션별 payload 타입이 서로 달라도 안전하다.
 */
const sectionElements: Record<SectionKey, ReactElement> = {
  profile: <ProfileSection payload={resume.profile} />,
  introduce: <IntroduceSection payload={resume.introduce} />,
  skill: <SkillSection payload={resume.skill} />,
  workExperience: <WorkExperienceSection payload={resume.workExperience} />,
  projectExperience: <ProjectExperienceSection payload={resume.projectExperience} />,
  openSource: <OpenSourceSection payload={resume.openSource} />,
  presentation: <PresentationSection payload={resume.presentation} />,
  article: <ArticleSection payload={resume.article} />,
  education: <EducationSection payload={resume.education} />,
  certificate: <CertificateSection payload={resume.certificate} />,
  etc: <EtcSection payload={resume.etc} />,
};

export function SectionRegistry() {
  return (
    <>
      {SECTION_ORDER.map((key) => (
        <Fragment key={key}>{sectionElements[key]}</Fragment>
      ))}
    </>
  );
}
