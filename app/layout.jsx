import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://shanzy-portfolio.vercel.app'),
  title: 'Shanzy Saleem  UI/UX Designer & Web Developer',
  description:
    'Portfolio of Shanzy Saleem  Creative UI/UX Designer and Web Developer. Specializing in Figma, Prototyping, SEO, and building modern web applications with Next.js.',
  keywords:
    'UI/UX Designer, Web Developer, Figma Expert, Prototyping, SEO, Next.js, Portfolio, Shanzy Saleem',
  authors: [{ name: 'Shanzy Saleem' }],
  creator: 'Shanzy Saleem',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shanzy-portfolio.vercel.app',
    title: 'Shanzy Saleem  UI/UX Designer & Web Developer',
    description:
      'Portfolio of Shanzy Saleem  Creative UI/UX Designer and Web Developer specializing in Figma, Prototyping, and Next.js.',
    siteName: 'Shanzy Saleem Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shanzy Saleem Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanzy Saleem  UI/UX Designer & Web Developer',
    description:
      'Portfolio of Shanzy Saleem  Creative UI/UX Designer and Web Developer specializing in Figma, Prototyping, and Next.js.',
    images: ['/og-image.jpg'],
  },

  manifest: '/site.webmanifest',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-black text-white antialiased min-h-screen`}
      >
        <div className='min-h-screen flex flex-col relative bg-black'>
          {/* Pure black background */}
          <div className='fixed inset-0 bg-black -z-10' />

          <Navbar />
          <main className='flex-1 relative z-10'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
