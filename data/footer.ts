import { FooterPayload } from '../types/resume';
import { homepage, version } from '../package.json';

const footer: FooterPayload = {
  version,
  github: homepage,
};

export default footer;
