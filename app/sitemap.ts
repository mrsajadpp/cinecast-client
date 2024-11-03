import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.cinecast.xyz',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.cinecast.xyz/tools',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.cinecast.xyz/tools/text-summarizer',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.cinecast.xyz/tools/paragraph-generator',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.cinecast.xyz/tools/title-generator',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]
}