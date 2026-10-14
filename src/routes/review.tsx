import { createFileRoute } from '@tanstack/react-router';
import { ReviewPage } from '@/components/artiq/pages';
export const Route = createFileRoute('/review')({
 head: () => ({ meta: [{ title: 'Private research panel · Artiq' }, { name: 'description', content: 'Prepare a private review of your draft with Artiq’s specialized intellectual perspectives.' }, { property: 'og:title', content: 'Private research panel · Artiq' }, { property: 'og:description', content: 'Prepare a private review of your draft with Artiq’s specialized intellectual perspectives.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: ReviewPage,
});
