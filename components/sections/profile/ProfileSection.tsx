import { PropsWithChildren } from 'react';
import { ProfilePayload } from '../../../types/resume';
import { SectionShell } from '../../ui/SectionShell';
import { Alert } from '../../ui/Alert';
import { Icon } from '../../ui/icons';
import { ProfileContact } from './ProfileContact';

export default function ProfileSection({ payload }: PropsWithChildren<{ payload: ProfilePayload }>) {
  return (
    <SectionShell meta={payload}>
      <ProfileContent payload={payload} />
    </SectionShell>
  );
}

function ProfileContent({ payload }: PropsWithChildren<{ payload: ProfilePayload }>) {
  const { image, contact, name, notice } = payload;

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="pb-3 text-md-right text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="profile-image img-fluid rounded" src={image} alt="Profile" />
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col text-center text-md-left">
              <h1 className="text-blue">
                {name.title} <small>{name.small || ''}</small>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col pt-3">
              {contact.map((item, index) => (
                <ProfileContact key={index.toString()} payload={item} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Alert className="mt-3">
                {notice.icon ? <Icon className="mr-2" name={notice.icon} /> : null}
                {notice.title}
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
