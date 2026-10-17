import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://shanzyseoexpert.com'),
  title: 'Shopify SEO and AI Automation Expert | Shanzy Saleem',
  description:
    'Shopify SEO and AI Automation Expert helping ecommerce stores grow with data-driven SEO, automated workflows, and 12+ years of experience.',
  keywords:
    'Shopify SEO, AI Automation Expert, Ecommerce SEO, Data-Driven SEO, Shopify Growth, AI Automation, Web Developer, Shanzy Saleem',
  authors: [{ name: 'Shanzy Saleem' }],
  creator: 'Shanzy Saleem',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shanzyseoexpert.com',
    title: 'Shopify SEO and AI Automation Expert | Shanzy Saleem',
    description:
      'Shopify SEO and AI Automation Expert helping ecommerce stores grow with data-driven SEO, automated workflows, and 12+ years of experience.',
    siteName: 'Shanzy Saleem | Shopify SEO & AI Automation Expert',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shanzy Saleem - Shopify SEO and AI Automation Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify SEO and AI Automation Expert | Shanzy Saleem',
    description:
      'Shopify SEO and AI Automation Expert helping ecommerce stores grow with data-driven SEO, automated workflows, and 12+ years of experience.',
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
