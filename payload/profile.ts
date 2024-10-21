import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  sectionId: 'PROFILE',
  disable: false,

  image,
  name: {
    title: '백승현',
    small: '',
  },
  contact: [
    {
      title: 'ffislfek@gmail.com',
      link: 'mailto:ffislfek@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/LittleGiantBaek',
      icon: faGithub,
    },
    {
      link: 'https://velog.io/@littlegiant/posts',
      icon: faBlog,
    },
    {
      title: 'https://www.linkedin.com/in/승현-백-80ab96226/',
      link: 'https://www.linkedin.com/in/%EC%8A%B9%ED%98%84-%EB%B0%B1-80ab96226/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '이메일을 통해 연락 주시면 감사하겠습니다.',
    icon: faBell,
  },
};

export default profile;
