import { PropsWithChildren } from 'react';
import { FooterPayload } from '../../../types/resume';
import { ExternalLink } from '../../ui/ExternalLink';

export default function FooterSection({ payload }: PropsWithChildren<{ payload: FooterPayload }>) {
  return (
    <div className="row">
      <div className="col footer-cover">
        <div className="text-center mt-4">
          <div className="row">
            <div className="col">
              <small>
                v.{`${payload.version} / `}
                {/* Github 주소는 origin repository 의 주소를 넣는다. */}
                <ExternalLink url="https://github.com/LittleGiantBaek" text="Github" />
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
