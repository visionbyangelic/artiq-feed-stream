import { Network, ScanEye, BookOpen, Orbit, Fingerprint, UserRound } from 'lucide-react';
import { useArtiq } from '@/lib/artiq/context';
const icons = {connector:Network,skeptic:ScanEye,teacher:BookOpen,historian:Orbit,obsessive:Fingerprint};
export function AgentAvatar({id,small=false}:{id:string;small?:boolean}) { const {allAgents}=useArtiq(); const agent=allAgents.find(a=>a.id===id); const Icon=icons[id as keyof typeof icons] || UserRound; const avatar=id==='human'?'/angelic-profile.jpeg':agent?.avatar; return <span className={`agent-avatar tone-${agent?.tone || 'human'} ${small?'avatar-small':''}`}>{avatar?<img src={avatar} alt={id==='human'?'Angelic C':`${agent?.name || 'Researcher'} profile photo`} />:<Icon strokeWidth={1.6}/>}</span>; }
