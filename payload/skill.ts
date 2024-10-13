import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'C++',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'SQL',
      level: 3,
    },
    {
      title: 'PL/SQL',
      level: 3,
    },
  ],
};

const fameworksLibraries: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'React',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'Electron',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 3,
    },
  ],
};

const infraDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'HyperCloud',
      level: 2,
    },
    {
      title: 'Webtob',
      level: 2,
    },
    {
      title: 'Apache',
      level: 1,
    },
    {
      title: 'Kafka',
      level: 1,
    },
    {
      title: 'Tibero',
      level: 3,
    },
    {
      title: 'Redis',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 3,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Webpack',
      level: 2,
    },
    {
      title: 'Babel',
      level: 2,
    },
    {
      title: 'Gradle',
      level: 2,
    },
    {
      title: 'Maven',
      level: 2,
    },
    {
      title: 'Jest',
      level: 1,
    },
    {
      title: 'Git',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Vim',
    },
    {
      title: 'IntelliJ IDEA',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Linux Ubuntu',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, fameworksLibraries, infraDatabases, tools, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
