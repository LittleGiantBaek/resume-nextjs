import { SkillGroup, SkillPayload } from '../types/resume';

const programmingLanguages: SkillGroup = {
  category: 'Programming Languages',
  items: [
    { title: 'JavaScript', level: 3 },
    { title: 'TypeScript', level: 3 },
    { title: 'HTML/CSS', level: 3 },
    { title: 'Java', level: 3 },
    { title: 'SQL', level: 3 },
    { title: 'PL/SQL', level: 3 },
    { title: 'C', level: 2 },
    { title: 'C++', level: 2 },
  ],
};

const fameworksLibraries: SkillGroup = {
  category: 'Frameworks & Libraries',
  items: [
    { title: 'React' },
    { title: 'Next.js' },
    { title: 'Spring Boot' },
    { title: 'Node.js' },
    { title: 'Electron' },
  ],
};

const infraDatabases: SkillGroup = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'Tibero' },
    { title: 'Redis' },
    { title: 'MySQL' },
    { title: 'Kubernetes' },
    { title: 'Docker' },
    { title: 'Webtob' },
    { title: 'Apache' },
    { title: 'Kafka' },
  ],
};

const tools: SkillGroup = {
  category: 'Tools',
  items: [
    { title: 'Webpack' },
    { title: 'Babel' },
    { title: 'Gradle' },
    { title: 'Maven' },
    { title: 'Jest' },
    { title: 'Git' },
    { title: 'VS Code' },
    { title: 'Vim' },
    { title: 'IntelliJ IDEA' },
  ],
};

const misc: SkillGroup = {
  category: 'Misc',
  items: [{ title: 'Linux Ubuntu' }],
};

const skill: SkillPayload = {
  sectionId: 'SKILL',
  disable: false,
  skills: [programmingLanguages, fameworksLibraries, infraDatabases, tools, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
