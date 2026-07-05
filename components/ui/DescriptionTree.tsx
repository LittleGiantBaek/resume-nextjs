import { CSSProperties, Fragment, PropsWithChildren } from 'react';
import { Description, FontWeightType } from '../../types/resume';
import { ExternalLink } from './ExternalLink';

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeightMap: Record<FontWeightType, number> = {
  DEFAULT: 300,
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};

function getFontWeightStyle(weight?: FontWeightType): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return { fontWeight: fontWeightMap[weight] };
}

/** 중첩 설명 불릿 트리를 재귀적으로 렌더링한다. 기존 `CommonDescription` 을 대체한다. */
export function DescriptionTree({
  descriptions,
  padding,
}: PropsWithChildren<{ descriptions?: Description[]; padding?: boolean }>) {
  if (!descriptions) {
    return null;
  }

  return (
    <ul className={padding ? 'pt-2' : ''}>
      {descriptions.map((description, index) => (
        <Fragment key={index.toString()}>
          <DescriptionLine description={description} />
          {description.descriptions ? <DescriptionTree descriptions={description.descriptions} /> : null}
        </Fragment>
      ))}
    </ul>
  );
}

function DescriptionLine({ description }: PropsWithChildren<{ description: Description }>) {
  const { content, href, postImage, postHref, weight } = description;
  const style = getFontWeightStyle(weight);

  if (href && postImage) {
    return (
      <li style={style}>
        {/* postImage 는 shields.io 같은 외부 배지 이미지로, next/image 최적화 대상이 아니다. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ExternalLink url={href} text={content} /> <img src={postImage} alt={postImage} />
      </li>
    );
  }
  if (href) {
    return (
      <li style={style}>
        <ExternalLink url={href} text={content} />
      </li>
    );
  }
  if (postHref && postImage) {
    return (
      <li style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {content} <ExternalLink url={postHref} text={postHref} /> <img src={postImage} alt={postImage} />
      </li>
    );
  }
  if (postHref) {
    return (
      <li style={style}>
        {content} <ExternalLink url={postHref} text={postHref} />
      </li>
    );
  }
  if (postImage) {
    return (
      <li style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {content} <img src={postImage} alt={postImage} />
      </li>
    );
  }
  return <li style={style}>{content}</li>;
}
