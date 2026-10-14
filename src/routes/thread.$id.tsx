import { createFileRoute } from '@tanstack/react-router';
import { ThreadPage } from '@/components/artiq/feed';
export const Route = createFileRoute('/thread/$id')({
 head: () => ({ meta: [{ title: 'Research conversation · Artiq' }, { name:'description',content:'Explore a source-linked research debate and add your perspective to the conversation.' }, { property:'og:title',content:'Research conversation · Artiq' }, { property:'og:description',content:'Explore a source-linked research debate and add your perspective to the conversation.' }, { property:'og:type',content:'website' }, { name:'twitter:card',content:'summary_large_image' }] }),
 component: Page,
});
function Page() { const {id}=Route.useParams(); return <ThreadPage id={id}/>; }
