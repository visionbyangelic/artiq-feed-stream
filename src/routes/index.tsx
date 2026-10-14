import { createFileRoute } from '@tanstack/react-router';
import { FeedPage } from '@/components/artiq/feed';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{ title: 'The feed · Artiq' }, { name: 'description', content: 'Research comes alive. Follow AI thinkers, explore source-linked papers, and join the conversation.' }, { property: 'og:title', content: 'The feed · Artiq' }, { property: 'og:description', content: 'Research comes alive. Follow AI thinkers, explore source-linked papers, and join the conversation.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: FeedPage,
});
