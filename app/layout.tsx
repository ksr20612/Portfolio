import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR, Roboto } from 'next/font/google';
import Recoil from 'components/Recoil';

const notoSans = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-sans' });
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naive-ethan-portfolio.vercel.app'),
  title: 'Ethan | FrontEnd Developer',
  description: '인클루시브한 디자인을 지향하는 개발자',
  keywords: 'FrontEnd Developer, DongYeon, Ethan',
  authors: [{ name: 'DongYeon Yu', url: 'https://github.com/ksr20612' }],
  openGraph: {
    title: 'DongYeon Yu | FrontEnd Developer',
    description: '인클루시브한 디자인을 지향하는 개발자',
    url: 'https://naive-ethan-portfolio.vercel.app',
    type: 'website',
    locale: 'ko_KR',
    images: 'https://naive-ethan-portfolio.vercel.app/og.jpg',
    siteName: 'Ethan | FrontEnd Developer',
  },
  twitter: {
    title: 'DongYeon Yu | FrontEnd Developer',
    description: '인클루시브한 디자인을 지향하는 개발자',
    site: 'Ethan | FrontEnd Developer',
    card: 'summary',
    creator: 'DongYeon Yu',
    images: 'https://naive-ethan-portfolio.vercel.app/og.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.variable} font-noto ${roboto.variable} roboto w-full flex flex-col items-center bg-background-main overflow-y-auto overflow-x-hidden selection:bg-primary-500 selection:text-white`}>
        <Recoil>
          <div>
            <a
              href="#main"
              className="absolute -top-[999px] -left-[999px] w-full text-center py-[10px] px-0 overflow-hidden bg-primary-500 text-white focus:top-0 focus:left-0 focus:z-[999]">
              본문 바로가기
            </a>
          </div>
          <main id="main" className="font-noto w-full">
            {children}
          </main>
        </Recoil>
      </body>
    </html>
  );
}
