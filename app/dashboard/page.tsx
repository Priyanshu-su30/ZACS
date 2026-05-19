
import { CirclePlus } from 'lucide-react';

export default function Dashboard() {
  return (
    <main className="max-w-[1440px] mx-auto pb-24 md:pb-0 pt-20 px-4 md:px-6">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-black/80 backdrop-blur-xl border-b border-white/10 hidden md:flex">
        <div className="text-2xl font-black italic text-violet-600 dark:text-violet-500 tracking-widest font-headline-lg uppercase font-black">ZACS</div>
        <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-violet-500 dark:text-violet-400 hover:text-cyan-400 transition-all duration-200 active:scale-95">notifications</button>
        <CirclePlus/>
        <button className="material-symbols-outlined text-violet-500 dark:text-violet-400 hover:text-cyan-400 transition-all duration-200 active:scale-95">add_circle</button>
        <img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-white/20 ml-2 object-cover" data-alt="close up portrait of a young woman with neon purple and cyan rim lighting looking confidently at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeox43Lq4rHC3ctnuFmdSRfmoX-Esb4yAR-nDeSNPU50jdI0mTtu2dMGAYsEIg90fJ2FwGug4gpimlxehIRcmN3FRsf4wkNUgmS-2As2WkgQPpnoGssRe6x-kksDl3JChz6jbhbzLJM_UKXqTLyEGcqQpVIJKXCyWB4Ru6-LLbtQhIta3H1PCcEDSqDP0DZw4X_pHMUWTJVihV_reoAYXr1eF7ouIGXJ3UXPSebFJidrBTHLAizXBmqx-NJ7wrleMD8sqntFDAB6I"/>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Grid 1: XP Progress */}
        <section className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl p-6 flex flex-col relative overflow-hidden col-span-1 md:col-span-12">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[rgba(208,188,255,0.2)] rounded-full blur-[60px] pointer-events-none"></div>
          <div className="flex justify-between items-end mb-6 z-10">
            <div>
              <h2 className="font-sans text-sm font-semibold text-outline uppercase tracking-wider mb-1">Current Rank</h2>
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-[32px] font-bold text-on-surface">Silver</span>
                <span className="text-secondary">Level 24</span>
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-sans text-sm font-semibold text-outline uppercase tracking-wider mb-1">Next Tier</h3>
              <span className="font-heading text-[24px] font-semibold text-on-surface-variant">Gold</span>
            </div>
          </div>
          <div className="w-full h-1 bg-surface-container-high rounded-full mt-2 relative z-10">
            <div className="absolute top-0 left-0 h-full w-[68%] bg-secondary shadow-[0_0_12px_rgba(76,215,246,0.8)] rounded-full"></div>
          </div>
          <div className="flex justify-between mt-3 z-10">
            <span className="font-sans text-sm font-semibold text-outline uppercase tracking-wider">6,800 XP</span>
            <span className="font-sans text-sm font-semibold text-outline uppercase tracking-wider">10,000 XP</span>
          </div>
        </section>

        {/* Grid 2: Active Duels */}
        <section className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl p-6 flex flex-col relative overflow-hidden col-span-1 md:col-span-6">
          <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.1)] pb-4 mb-5">
            <h2 className="font-heading text-[24px] font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">bolt</span> Active Duels
            </h2>
            <span className="px-3 py-1 rounded-full bg-[rgba(147,0,10,0.2)] border border-[rgba(255,180,171,0.3)] text-[#ffb4ab] font-sans text-sm font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">timer</span> 14:22:05
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full p-[2px] border-2 border-secondary relative">
                  <img alt="Your Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCofHAofyOR8BQZ5LAy-iIVYIyCPARbZADVHIHSBlJFfShyZSJESYXLI6TR9_UZjlGTDL-LJWuxNCrX2yGLM4GqZX_xMm_UNaLKIXOeLbqWalgAY_dY4AN64X1W0178yCGUlX_A8V2lU0oj5x2WtESf9WA9eFrfiCKkk8cB6p6Sj0JZVzu91-ZkZpdXzvNESnmgr6DSxV9Oi8o5tySMvWX7NdYtzvVRlbSuLw52yP6UI0HwQmGkIVtEaBU6G0w4iMRGngSPNBOiCYU" />
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary font-sans text-[10px] font-semibold px-1.5 py-0.5 rounded-[2px]">YOU</div>
                </div>
                <span className="font-heading text-[24px] font-semibold text-on-surface">84</span>
              </div>
              <div className="font-heading text-[32px] font-black italic text-outline-variant mx-4">VS</div>
              <div className="flex flex-col items-center gap-2 group-opponent">
                <div className="w-14 h-14 rounded-full p-[2px] border-2 border-outline relative">
                  <img alt="Opponent Avatar" className="w-full h-full rounded-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW-9J3iliwiiZ_xvg5kEHn9BKaVfvB-cZjiuYbFDCFXTTrjfSkf9F8fU3qLrC2eRBrH29TfPU3jRP8sXS9XgPri0aG4dWQm2UuWGJSKVJm-4FPX6eQx1KOJquv7zw-OX0O0ToUVEQY0HNQyz6EiFVqxVgM9MbkI3KdweP5WD3YWMvoIErj2o5MA_5WvsNGd7noybIGKzxTKnbZ4RTOCfq5OFSVx45m13YYMIITQiqUb2NOWh01W2AUlghGe9NELjgoMjxLIJkngJg" />
                </div>
                <span className="font-heading text-[24px] font-semibold text-on-surface-variant">72</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="w-full h-[6px] bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-secondary"></div>
              </div>
              <div className="w-full h-[6px] bg-surface-container-high rounded-full overflow-hidden flex justify-end">
                <div className="h-full w-[72%] bg-outline"></div>
              </div>
            </div>
            <p className="font-sans text-sm text-outline text-center mt-2">Theme: 90s Sci-Fi Thrillers</p>
          </div>
        </section>

        {/* Grid 3: Genre DNA */}
        <section className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl p-6 flex flex-col relative overflow-hidden col-span-1 md:col-span-6">
          <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.1)] pb-4 mb-5">
            <h2 className="font-heading text-[24px] font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">fingerprint</span> Genre DNA
            </h2>
            <span className="font-sans text-sm font-semibold text-outline uppercase tracking-wider mb-1">Last 30 Days</span>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <div className="flex flex-col gap-1.5 mb-4">
              <div className="flex justify-between font-sans text-sm font-semibold">
                <span className="text-on-surface">Sci-Fi & Fantasy</span>
                <span className="text-secondary">42%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-sm overflow-hidden">
                <div className="h-full w-[42%] bg-secondary shadow-[0_0_8px_var(--color-secondary)]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              <div className="flex justify-between font-sans text-sm font-semibold">
                <span className="text-on-surface">Psychological Thriller</span>
                <span className="text-primary">28%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-sm overflow-hidden">
                <div className="h-full w-[28%] bg-primary shadow-[0_0_8px_var(--color-primary)]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              <div className="flex justify-between font-sans text-sm font-semibold">
                <span className="text-on-surface">Auteur Drama</span>
                <span className="text-tertiary">15%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-sm overflow-hidden">
                <div className="h-full w-[15%] bg-tertiary shadow-[0_0_8px_var(--color-tertiary)]"></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider border border-[rgba(76,215,246,0.3)] text-secondary">#Cyberpunk</span>
              <span className="px-3 py-1 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider border border-[rgba(208,188,255,0.3)] text-primary">#Mindbender</span>
              <span className="px-3 py-1 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider border border-[rgba(149,142,160,0.3)] text-outline">#SlowBurn</span>
            </div>
          </div>
        </section>

        {/* Grid 4: Quick Adder */}
        <section className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl p-6 flex flex-col relative overflow-hidden col-span-1 md:col-span-12 md:flex-row bg-[rgba(40,42,49,0.4)] items-center justify-between gap-6">
          <div className="flex-grow w-full">
            <label className="font-heading text-[24px] font-semibold text-on-surface flex items-center gap-2 mb-4 block">What did you watch?</label>
            <div className="w-full relative group">
              <span className="material-symbols-outlined absolute left-0 bottom-3 text-outline transition-colors duration-200 group-focus-within:text-primary">search</span>
              <input type="text" className="w-full bg-transparent border-b-2 border-outline-variant p-3 pl-8 font-sans text-lg text-on-surface outline-none transition-colors duration-200 focus:border-primary" placeholder="Search film title..." />
            </div>
          </div>
          <button className="w-full md:w-auto bg-primary text-on-primary font-sans text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-lg shadow-[4px_4px_0_var(--color-primary)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-primary-container hover:-translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 whitespace-nowrap">
            <span className="material-symbols-outlined font-bold">add</span> Log Film
          </button>
        </section>
      </div>
    </main>
  );
}
