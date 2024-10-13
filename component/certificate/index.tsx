import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { ICertificate } from './ICertificate';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ICertificate.Payload;
type Item = ICertificate.Item;

export const Certificate = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="CERTIFICATE">
      <EducationRow payload={payload} />
    </CommonSection>
  );
}

function EducationRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const [acquisitionDate] = [item.acquisitionDate].map((at) =>
    DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL_DD).toFormat(DATE_FORMAT.YYYY_DOT_LL_DOT_DD),
  );

  return {
    left: { title: `${acquisitionDate}` },
    right: {
      ...item,
    },
  };
}
