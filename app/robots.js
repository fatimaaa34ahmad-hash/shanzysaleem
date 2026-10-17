export default function robots() {
  const baseUrl = 'https://shanzyseoexpert.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/signin', '/signup'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
