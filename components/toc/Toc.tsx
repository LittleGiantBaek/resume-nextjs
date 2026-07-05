'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Toc.module.css';
import { sectionIds } from '../../data';

/**
 * ### 우측 고정 TOC 도트 네비게이션
 *
 * @description 스크롤 위치를 감지해 활성 섹션을 표시하고, hover 시 전체 목차를 펼친다.
 * 기존 `component/toc/index.tsx` 를 그대로 이관했다.
 */
export function Toc() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTocVisible, setIsTocVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const prevScrollTopRef = useRef<number>(0);
  const isManualScrollRef = useRef<boolean>(false);
  const manualScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let visibleSections: string[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            if (!visibleSections.includes(sectionId)) {
              visibleSections = [...visibleSections, sectionId];
            }
          } else {
            visibleSections = visibleSections.filter((id) => id !== sectionId);
          }
        });

        visibleSections = [...visibleSections].sort((a, b) => {
          const elementA = document.getElementById(a);
          const elementB = document.getElementById(b);
          if (elementA && elementB) {
            return elementA.getBoundingClientRect().top - elementB.getBoundingClientRect().top;
          }
          return 0;
        });

        if (visibleSections.length > 0) {
          const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

          if (currentScrollTop > prevScrollTopRef.current) {
            setActiveSection(visibleSections[visibleSections.length - 1]);
          } else {
            setActiveSection(visibleSections[0]);
          }
          prevScrollTopRef.current = currentScrollTop;
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 960);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isScreenSmall) {
    return null;
  }

  const handleClick = (id: string) => {
    setActiveSection(id);
    isManualScrollRef.current = true;

    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 1000);
  };

  const getTocItemClassName = (id: string) => {
    if (activeSection === id) {
      return `${styles.tocItem} ${styles.tocItemActive}`;
    }
    if (hoveredItem === id) {
      return `${styles.tocItem} ${styles.tocItemHover}`;
    }
    return styles.tocItem;
  };

  return (
    <>
      <div className={styles.tocBarContainer} onMouseEnter={() => setIsTocVisible(true)}>
        {sectionIds.map((id) => (
          <div key={id} className={activeSection === id ? styles.progressBarActive : styles.progressBar} />
        ))}
      </div>
      <div
        className={styles.toc}
        style={{ opacity: isTocVisible ? 1 : 0, pointerEvents: isTocVisible ? 'auto' : 'none' }}
        onMouseLeave={() => setIsTocVisible(false)}
      >
        <ul className={styles.tocList}>
          {sectionIds.map((id) => (
            <li
              className={getTocItemClassName(id)}
              key={`li-#${id}`}
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={`#${id}`}
                className={activeSection === id ? styles.tocLinkActive : styles.tocLink}
                onClick={() => handleClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
