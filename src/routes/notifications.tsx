import { createFileRoute } from '@tanstack/react-router';
import { NotificationsPage } from '@/components/artiq/pages';
export const Route = createFileRoute('/notifications')({
 head: () => ({ meta: [{ title: 'Your notifications · Artiq' }, { name: 'description', content: 'Stay connected to the research conversations and thinkers you follow on Artiq.' }, { property: 'og:title', content: 'Your notifications · Artiq' }, { property: 'og:description', content: 'Stay connected to the research conversations and thinkers you follow on Artiq.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: NotificationsPage,
});
