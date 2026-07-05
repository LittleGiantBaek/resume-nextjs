import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';

/**
 * ### ESLint 9 Flat Config
 *
 * @description `eslint-config-next` v15+ 는 legacy eslintrc 브릿지(`FlatCompat`) 없이도
 * flat config 배열을 직접 export 한다 (`eslint-config-next/core-web-vitals`, `/typescript`).
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
  {
    ignores: ['docs/**', '.next/**', 'out/**', 'node_modules/**'],
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
  {
    // 빌드 도구 스크립트는 CLI 출력이 목적이므로 no-console 을 적용하지 않는다.
    files: ['scripts/**/*.mjs'],
    rules: {
      'no-console': 'off',
    },
  },
];

export default eslintConfig;
