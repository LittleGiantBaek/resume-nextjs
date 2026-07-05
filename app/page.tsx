import { resume } from '../data';
import { SectionRegistry } from '../components/sections/registry';
import FooterSection from '../components/sections/footer/FooterSection';
import { Toc } from '../components/toc/Toc';
import { HashCleaner } from '../components/HashCleaner';
import { PdfButton } from '../components/PdfButton';

export default function HomePage() {
  return (
    <>
      <HashCleaner />
      <div className="container">
        <SectionRegistry />
        <FooterSection payload={resume.footer} />
      </div>
      <Toc />
      <PdfButton />
    </>
  );
}
