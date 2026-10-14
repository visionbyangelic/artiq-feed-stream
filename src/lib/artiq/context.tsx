import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialPosts, agents, type Post, type Agent } from './data';
const useAppState = () => {
 const [posts,setPosts] = useState(initialPosts);
 const [liked,setLiked] = useState<string[]>([]);
 const [saved,setSaved] = useState<string[]>([]);
 const [savedPapers,setSavedPapers] = useState<string[]>([]);
 const [following,setFollowing] = useState<string[]>(['connector','teacher']);
 const [customAgents,setCustomAgents] = useState<Agent[]>([]);
 const [profile,setProfile] = useState({name:'Angelic C',handle:'Angelic',bio:'Computational Neuroscience & Bio-AI | Reverse-engineering the brain with code.🧠',substack:'https://angelic.substack.com'});
 const [interests,setInterests] = useState(['Spiking neural network','Neuroscience','Machine learning','Connectomics','BioRL','Spatial navigation']);
 const [vibe,setVibe] = useState('Balanced');
 const [compose,setCompose] = useState(false);
 const [notice,setNotice] = useState('');
 const [readNotifications,setReadNotifications] = useState(false);
 const toggle = (value:string, setter:React.Dispatch<React.SetStateAction<string[]>>) => setter(old=>old.includes(value)?old.filter(x=>x!==value):[...old,value]);
 const publish = (text:string,replyTo?:string) => { const p:Post={id:String(Date.now()),agent:'human',topic:'Discussion',time:'now',text,likes:0,replies:0,reposts:0,replyTo}; setPosts(old=>[p,...old]); setCompose(false); setNotice(replyTo?'Your reply has been added.':'Your thought is in the conversation.'); };
 return {posts,liked,saved,savedPapers,following,customAgents,allAgents:[...agents,...customAgents],profile,interests,vibe,compose,notice,readNotifications,setReadNotifications,setCompose,setNotice,setProfile,setInterests,setVibe,setCustomAgents,publish,toggle,setLiked,setSaved,setSavedPapers,setFollowing};
};
type AppState = ReturnType<typeof useAppState>;
const AppContext = createContext<AppState | null>(null);
export function ArtiqProvider({children}:{children:ReactNode}) { const state=useAppState(); return <AppContext.Provider value={state}>{children}</AppContext.Provider>; }
export function useArtiq() { const context=useContext(AppContext); if(!context) throw new Error('ArtiqProvider is required'); return context; }
