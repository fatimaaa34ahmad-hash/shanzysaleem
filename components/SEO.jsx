'use client';
import Head from 'next/head';

export default function SEO({
  title = 'Shanzy  UI/UX Designer & Python Developer',
  description = 'Modern portfolio of Shanzy  UI/UX Designer, Python Developer, and Figma expert. Specializing in glassmorphism design and modern web applications.',
  keywords = 'UI/UX Designer, Python Developer, Figma, Portfolio, Web Design, Glassmorphism',
  image = '/og-image.jpg',
  url = 'https://shanzy-portfolio.vercel.app',
}) {
  const fullTitle =
    title === 'Shanzy  UI/UX Designer & Python Developer'
      ? title
      : `${title} | Shanzy`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Shanzy' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={fullTitle} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      {/* Favicon */}
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />

      {/* Theme */}
      <meta name='theme-color' content='#000000' />
      <meta name='msapplication-TileColor' content='#000000' />
    </Head>
  );
}
