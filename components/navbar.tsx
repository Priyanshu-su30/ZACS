import { Bell, CirclePlus } from 'lucide-react';
import ProfileMenu from "@/components/profilemenu";

export default function Navbar(){
    return (
        <>
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-black/80 backdrop-blur-xl border-b border-white/10 hidden md:flex">
          <div className="text-2xl font-black italic text-violet-600 dark:text-violet-500 tracking-widest font-headline-lg uppercase ">ZACS</div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-violet-500 dark:text-violet-400 hover:text-cyan-400 transition-all duration-200 active:scale-95 cursor-pointer"><Bell/></button>
            <button className="material-symbols-outlined text-violet-500 dark:text-violet-400 hover:text-cyan-400 transition-all duration-200 active:scale-95 cursor-pointer"><CirclePlus/></button>
            <ProfileMenu />
          </div>
        </header>
        </>
    )
}