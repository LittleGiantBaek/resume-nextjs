// @ts-check
/**
 * ### `next build` (output: 'export') 이후 처리 스크립트
 *
 * @description 기존 `shellwork.js` (shelljs/chalk 기반)를 `node:fs` 만 사용하도록 대체했다.
 * 1. `out/` 산출물을 `docs/` 로 복사한다 (기존 `docs/` 는 먼저 삭제한다).
 * 2. `docs/.nojekyll` 빈 파일을 생성한다.
 * 3. `package.json` 의 `homepage` 가 `*.github.io` 도메인이 아니면 `docs/CNAME` 을 생성한다.
 */
import { existsSync, mkdirSync, rmSync, cpSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const outDir = path.join(rootDir, 'out');
const docsDir = path.join(rootDir, 'docs');
const packageJsonPath = path.join(rootDir, 'package.json');

function copyOutToDocs() {
  if (!existsSync(outDir)) {
    throw new Error(`postexport: '${outDir}' 디렉토리가 없습니다. 먼저 'next build' 를 실행하세요.`);
  }

  if (existsSync(docsDir)) {
    rmSync(docsDir, { recursive: true, force: true });
  }

  mkdirSync(docsDir, { recursive: true });
  cpSync(outDir, docsDir, { recursive: true });
  console.log(`postexport: '${outDir}' -> '${docsDir}' 복사 완료.`);
}

function createNojekyll() {
  writeFileSync(path.join(docsDir, '.nojekyll'), '');
  console.log('postexport: docs/.nojekyll 생성 완료.');
}

function createCnameIfNeeded() {
  const { homepage } = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  if (!homepage) {
    console.warn('postexport: package.json 의 homepage 필드가 없어 CNAME 생성을 건너뜁니다.');
    return;
  }

  // *.github.io 도메인이면 Github Pages 기본 도메인으로 간주하고 CNAME 을 생성하지 않는다.
  const githubIoRegex = /^https?:\/\/[^/]+\.github\.io/;
  if (githubIoRegex.test(homepage)) {
    console.log(`postexport: homepage(${homepage}) 는 github.io 도메인이므로 docs/CNAME 을 생성하지 않습니다.`);
    return;
  }

  const { hostname } = new URL(homepage);
  writeFileSync(path.join(docsDir, 'CNAME'), hostname);
  console.log(`postexport: Custom Domain(${hostname}) 감지, docs/CNAME 생성 완료.`);
}

copyOutToDocs();
createNojekyll();
createCnameIfNeeded();
