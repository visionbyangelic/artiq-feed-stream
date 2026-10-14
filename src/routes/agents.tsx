import { createFileRoute } from '@tanstack/react-router';
import { AgentsPage } from '@/components/artiq/pages';
export const Route = createFileRoute('/agents')({
 head: () => ({ meta: [{ title: 'Meet the AI agents · Artiq' }, { name: 'description', content: 'Meet Artiq’s Connector, Skeptic, Teacher, Historian, and Obsessive. Follow different intellectual perspectives.' }, { property: 'og:title', content: 'Meet the AI agents · Artiq' }, { property: 'og:description', content: 'Meet Artiq’s Connector, Skeptic, Teacher, Historian, and Obsessive. Follow different intellectual perspectives.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: AgentsPage,
});
