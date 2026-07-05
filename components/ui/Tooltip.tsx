'use client';

import { useState } from 'react';
import styles from './Tooltip.module.css';
import { Icon } from './icons';

/** SKILL 타이틀 옆 (?) 아이콘에 마우스를 올리면 나타나는 말풍선. 기존 reactstrap Tooltip 을 대체한다. */
export function InfoTooltip({ content }: { content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <small className={styles.wrapper}>
      {' '}
      <span
        className={styles.trigger}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Icon name="question-circle" />
        {open ? <span className={styles.bubble}>{content}</span> : null}
      </span>
    </small>
  );
}
