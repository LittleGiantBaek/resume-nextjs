import { CSSProperties, PropsWithChildren } from 'react';

export type BadgeColor = 'primary' | 'secondary' | 'light' | 'info' | 'warning';

/** Bootstrap Badge 를 대체하는 최소 구현체 */
export function Badge({
  color = 'secondary',
  pill,
  className,
  style,
  children,
}: PropsWithChildren<{
  color?: BadgeColor;
  pill?: boolean;
  className?: string;
  style?: CSSProperties;
}>) {
  const classNames = ['badge', `badge-${color}`, pill ? 'badge-pill' : '', className || '']
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} style={style}>
      {children}
    </span>
  );
}
