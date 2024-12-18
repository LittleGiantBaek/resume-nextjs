/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useLayoutEffect } from 'react';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { WorkExperience } from '../component/workExperience';
import { ProjectExperience } from '../component/projectExperience';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import { Payload } from '../payload';
import { Article } from '../component/article';
import { Certificate } from '../component/certificate';
import { TableOfContents } from '../component/toc';

function ResumeComponent() {
  useLayoutEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <WorkExperience.Component payload={Payload.workExperience} />
        <ProjectExperience.Component payload={Payload.projectExperience} />
        <OpenSource.Component payload={Payload.openSource} />
        <Presentation.Component payload={Payload.presentation} />
        <Article.Component payload={Payload.article} />
        <Education.Component payload={Payload.education} />
        <Certificate.Component payload={Payload.certificate} />
        <Etc.Component payload={Payload.etc} />
        <Footer.Component payload={Payload.footer} />
      </Container>
      <TableOfContents.Component showToc />
    </>
  );
}

export default ResumeComponent;
