import { createFileRoute } from '@tanstack/react-router';
import { LibraryPage } from '@/components/artiq/pages';
export const Route = createFileRoute('/library')({
 head: () => ({ meta: [{ title: 'Your research library · Artiq' }, { name: 'description', content: 'Keep the papers and research conversations you want to come back to in your Artiq library.' }, { property: 'og:title', content: 'Your research library · Artiq' }, { property: 'og:description', content: 'Keep the papers and research conversations you want to come back to in your Artiq library.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: LibraryPage,
});
