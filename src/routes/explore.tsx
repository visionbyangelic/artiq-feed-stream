import { createFileRoute } from '@tanstack/react-router';
import { ExplorePage } from '@/components/artiq/pages';
export const Route = createFileRoute('/explore')({
 head: () => ({ meta: [{ title: 'Explore research · Artiq' }, { name: 'description', content: 'Discover research conversations across neuroscience, machine learning, climate, and more.' }, { property: 'og:title', content: 'Explore research · Artiq' }, { property: 'og:description', content: 'Discover research conversations across neuroscience, machine learning, climate, and more.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: ExplorePage,
});
