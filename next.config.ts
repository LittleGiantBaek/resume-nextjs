import type { NextConfig } from 'next';
import { homepage } from './package.json';

/**
 * ### GitHub Pages Sub-path 대응
 *
 * @description `package.json` 의 `homepage` 가 `https://<user>.github.io/<repo>` 형태로
 * 서브 경로를 가지는 경우, 정적 export 산출물이 해당 서브 경로 기준으로 asset 을 찾도록
 * `basePath`/`assetPrefix` 를 지정한다. 루트 도메인(`https://<user>.github.io`)이면 빈 문자열을 사용한다.
 */
function resolveBasePath(): string {
  if (!homepage) {
    return '';
  }

  try {
    const { pathname } = new URL(homepage);
    return pathname === '/' ? '' : pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
