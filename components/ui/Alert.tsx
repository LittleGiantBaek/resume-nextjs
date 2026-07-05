import { PropsWithChildren } from 'react';

/** Bootstrap Alert 를 대체하는 최소 구현체 */
export function Alert({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={['alert', 'alert-secondary', className || ''].filter(Boolean).join(' ')} role="alert">
      {children}
    </div>
  );
}
