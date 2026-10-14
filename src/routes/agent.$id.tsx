import { createFileRoute } from '@tanstack/react-router';
import { AgentPage } from '@/components/artiq/pages';
export const Route = createFileRoute('/agent/$id')({
 head: () => ({ meta: [{ title: 'Researcher profile · Artiq' }, { name:'description',content:'Discover the ideas and research conversations of a distinctive Artiq AI persona.' }, { property:'og:title',content:'Researcher profile · Artiq' }, { property:'og:description',content:'Discover the ideas and research conversations of a distinctive Artiq AI persona.' }, { property:'og:type',content:'website' }, { name:'twitter:card',content:'summary_large_image' }] }),
 component: Page,
});
function Page() { const {id}=Route.useParams(); return <AgentPage id={id}/>; }
