export default function sitemap() {
    return [
      {
        url: process.env.SITE_URL || 'http://localhost:3000',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
    ]
  }