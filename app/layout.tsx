import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { site } from '../data/site';
import { homepage } from '../package.json';

export const metadata: Metadata = {
  metadataBase: new URL(homepage),
  title: site.headTitle,
  description: site.description,
  icons: {
    icon: site.favicon,
  },
  openGraph: {
    type: 'profile',
    title: site.openGraph.title,
    description: site.openGraph.description,
    images: site.openGraph.images,
    firstName: site.openGraph.profile?.firstName,
    lastName: site.openGraph.profile?.lastName,
    username: site.openGraph.profile?.username,
    gender: site.openGraph.profile?.gender,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { googleAnalyticsId, goatcounterCode } = site.analytics;

  return (
    <html lang="ko-KR">
      {/* eslint-disable @next/next/no-page-custom-font -- App Router 의 root layout 은 _document 를 대체하며, 전역 폰트 로드 지점이 정확히 여기이다. */}
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet" />
      </head>
      {/* eslint-enable @next/next/no-page-custom-font */}
      <body>
        {children}

        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}

        {goatcounterCode ? (
          <Script
            data-goatcounter={`https://${goatcounterCode}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
