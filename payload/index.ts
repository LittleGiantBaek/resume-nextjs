import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import openSource from './openSource';
import workExperience from './workExperience';
import projectExperience from './projectExperience';
import presentation from './presentation';
import education from './education';
import article from './article';
import certificate from './certificate';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';
import { ICertificate } from '../component/certificate/ICertificate';
import { IWorkExperience } from '../component/workExperience/IWorkExperience';
import { IProjectExperience } from '../component/projectExperience/IProjectExperience';

export const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  workExperience,
  projectExperience,
  presentation,
  article,
  education,
  certificate,
  etc,
  footer,

  _global,
};

export interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  workExperience: IWorkExperience.Payload;
  projectExperience: IProjectExperience.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  certificate: ICertificate.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export const sectionIds = [
  !Payload.profile.disable && Payload.profile.sectionId,
  !Payload.introduce.disable && Payload.introduce.sectionId,
  !Payload.skill.disable && Payload.skill.sectionId,
  !Payload.workExperience.disable && Payload.workExperience.sectionId,
  !Payload.projectExperience.disable && Payload.projectExperience.sectionId,
  !Payload.openSource.disable && Payload.openSource.sectionId,
  !Payload.presentation.disable && Payload.presentation.sectionId,
  !Payload.article.disable && Payload.article.sectionId,
  !Payload.education.disable && Payload.education.sectionId,
  !Payload.certificate.disable && Payload.certificate.sectionId,
  !Payload.etc.disable && Payload.etc.sectionId,
].filter(Boolean) as string[];
