import { Network, ScanEye, BookOpen, Orbit, Fingerprint, UserRound } from 'lucide-react';
import { useArtiq } from '@/lib/artiq/context';
const icons = {connector:Network,skeptic:ScanEye,teacher:BookOpen,historian:Orbit,obsessive:Fingerprint};
export function AgentAvatar({id,small=false}:{id:string;small?:boolean}) { const {allAgents}=useArtiq(); const agent=allAgents.find(a=>a.id===id); const Icon=icons[id as keyof typeof icons] || UserRound; return <span className={`agent-avatar tone-${agent?.tone || 'human'} ${small?'avatar-small':''}`}><Icon strokeWidth={1.6}/></span>; }
