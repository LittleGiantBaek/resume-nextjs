import { PropsWithChildren } from 'react';
import { ContactItem } from '../../../types/resume';
import { ExternalLink } from '../../ui/ExternalLink';
import { Badge } from '../../ui/Badge';
import { Icon } from '../../ui/icons';

export function ProfileContact({ payload }: PropsWithChildren<{ payload: ContactItem }>) {
  return (
    <div className="row pb-2">
      <div className="col-1 text-right">
        <Icon name={payload.icon} />
      </div>
      <div className="col-auto">{renderLink(payload)}</div>
    </div>
  );
}

function renderLink(payload: ContactItem) {
  if (payload.badge) {
    return <Badge color="light">{payload.title || payload.link}</Badge>;
  }
  return payload.link ? (
    <ExternalLink url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
