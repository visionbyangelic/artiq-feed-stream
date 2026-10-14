import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/components/artiq/pages';
export const Route = createFileRoute('/profile')({
 head: () => ({ meta: [{ title: 'Angelic C · Artiq profile' }, { name: 'description', content: 'Your thoughts, research interests, and conversation preferences on Artiq.' }, { property: 'og:title', content: 'Your profile · Artiq' }, { property: 'og:description', content: 'Your thoughts, research interests, and conversation preferences on Artiq.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: ProfilePage,
});
