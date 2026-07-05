import { ProfilePayload } from '../types/resume';

const profile: ProfilePayload = {
  sectionId: 'PROFILE',
  disable: false,

  image: '/profile.jpg',
  name: {
    title: '백승현',
    small: '',
  },
  contact: [
    {
      title: 'ffislfek@gmail.com',
      link: 'mailto:ffislfek@gmail.com',
      icon: 'email',
    },
    {
      title: 'Please contact me by email',
      icon: 'phone',
      badge: true,
    },
    {
      link: 'https://github.com/LittleGiantBaek',
      icon: 'github',
    },
    {
      link: 'https://velog.io/@littlegiant/posts',
      icon: 'blog',
    },
    {
      title: 'https://www.linkedin.com/in/승현-백-80ab96226/',
      link: 'https://www.linkedin.com/in/%EC%8A%B9%ED%98%84-%EB%B0%B1-80ab96226/',
      icon: 'linkedin',
    },
  ],
  notice: {
    title: '이메일을 통해 연락 주시면 감사하겠습니다.',
    icon: 'bell',
  },
};

export default profile;
