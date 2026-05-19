export default function Feed() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* LEFT COLUMN: User Mini-Profile */}
        <aside className="hidden md:flex flex-col gap-3 col-span-3">
          <div className="bg-[rgba(30,31,38,0.4)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col p-6 items-center text-center">
            <div className="w-20 h-20 rounded-full border-2 border-secondary shadow-[0_0_15px_rgba(76,215,246,0.3)] mb-4 overflow-hidden">
              <img alt="Current User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9eq3WigiQpiltkDSNEzT65qiSXxeTJl8CFyX3dR-I1dl8aAeg6meRJZf9pQepMtD69FiEhFwgnAXkTBtggtYB4SQCXoqnf7LG_3F1UQZo-ad--nTxsnt8SSiy2-izVNWtF5NGgEGtXTX8TeAwtM2HUhan9fXkZbH7ZBShnRl1KDV8o04EtFMs7kt8T-BAfT6m3QdbfnVQK2A6qLx4AoJp0IurV79oqR92OH1eQS7-ADr-bjbCvkq4GbpXjZg989u-DasZrY0d5R0" />
            </div>
            <h2 className="font-heading text-[24px] font-semibold text-on-surface mb-1">Alex Mercer</h2>
            <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant font-sans text-sm font-semibold rounded-full mb-4">Cinephile Lvl 42</span>
            
            <div className="w-full flex flex-col gap-2 mb-6">
              <div className="flex justify-between font-sans text-sm font-semibold text-on-surface-variant">
                <span>Rank Progress</span>
                <span className="text-secondary">8,450 / 10K XP</span>
              </div>
              <div className="h-1 bg-surface-container-high rounded-full overflow-hidden shadow-[inset_0_0_5px_rgba(76,215,246,0.2)]">
                <div className="h-full w-[84%] bg-secondary shadow-[0_0_10px_rgba(76,215,246,0.8)]"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="bg-[rgba(51,52,60,0.5)] rounded-lg p-3 text-center">
                <div className="font-heading text-[24px] font-semibold text-primary">142</div>
                <div className="font-sans text-[10px] font-semibold text-on-surface-variant uppercase">Films Logged</div>
              </div>
              <div className="bg-[rgba(51,52,60,0.5)] rounded-lg p-3 text-center">
                <div className="font-heading text-[24px] font-semibold text-secondary">12</div>
                <div className="font-sans text-[10px] font-semibold text-on-surface-variant uppercase">Active Duels</div>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: The Pulse Feed */}
        <section className="flex flex-col gap-3 col-span-1 md:col-span-9 lg:col-span-6">
          
          {/* Feed Post 1: Achievement */}
          <article className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.05)]">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                <img alt="Sarah J" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKKdtHaeeXgB17438jZjrRIQgoMhACtpM27RK4cAlUY5wneQ2a6oRMpLamtiF0p9SiUH-7IiXBHq7yQluFswqpKipR8TqI36nkSmLC9LroK-DThcCV_LTW8wYqkaIV9oWSk3wo72iaCOxPStqnnd6HEMyEuWMuCC2Jfc1YLQ-WievVVM_RSt8RVjjRx5Zh-c9kqe7Pdh6OizpY0Z6VSUeiXlS8D4t6Mps4myBNYqgObjBF13QFXFDvwxbhQv2HdNh0s38r2YDktQ" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="font-sans text-sm font-semibold text-on-surface">Sarah J.</div>
                <div className="font-sans text-sm text-on-surface-variant">Unlocked an achievement</div>
              </div>
              <span className="text-[12px] text-on-surface-variant ml-auto">2h ago</span>
            </div>
            
            <div className="p-6 flex flex-col items-center text-center bg-gradient-to-b from-transparent to-[rgba(51,52,60,0.3)]">
              <div className="w-32 h-32 mb-6 rounded-full bg-surface-container-low border-2 border-primary shadow-[0_0_30px_rgba(208,188,255,0.4)] flex items-center justify-center relative">
                <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>movie_filter</span>
                <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.2)] animate-pulse"></div>
              </div>
              <h3 className="font-heading text-[32px] font-bold text-on-surface mb-2">Director&apos;s Cut</h3>
              <p className="font-sans text-lg text-on-surface-variant">Logged 50 films in the Auteur category this year. Absolute cinema.</p>
            </div>
            
            <div className="p-4 flex items-center justify-between bg-[rgba(26,27,34,0.5)] border-t border-[rgba(255,255,255,0.05)] mt-auto">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-on-surface-variant bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-secondary group">
                  <span className="material-symbols-outlined text-[20px]">sign_language</span>
                  <span className="font-sans text-sm font-semibold group-hover:text-secondary">24</span>
                </button>
                <button className="flex items-center gap-1 text-on-surface-variant bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary group">
                  <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                  <span className="font-sans text-sm font-semibold group-hover:text-primary">5</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-sans text-sm font-semibold border-none cursor-pointer shadow-[4px_4px_0_var(--color-primary-container)] transition-all duration-200 active:shadow-none active:translate-x-0.5 active:translate-y-0.5">Challenge</button>
            </div>
          </article>

          {/* Feed Post 2: Thought/Review */}
          <article className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.05)]">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                <img alt="Marcus T" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfmhHcr-N6zbuehNgy42FWOH6hUssdwoYF2OZSJTiNM5yjiqaYWo0Whv5Xu6d8iwkogBcysxoWFVXdm3XgIWFFV1cCw3Tj91Xg7pJ501RBro0CxUyvqzGqSBM0wJ5z6KaYu7wryIah8AZeocBXqMTt7KnEHY-YqAojplHqC9Bw_AM7GlN36GCvXaXsmAhTw1n26Pc6KUfHC3xVjKmWmD-9DkvVrqICguVMFW_7TjlKMCEzZ_vizKP6psqGSMi7uIiiuAbo_b03TmM" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="font-sans text-sm font-semibold text-on-surface">Marcus T.</div>
                <div className="font-sans text-sm text-on-surface-variant">Reviewed <span className="text-on-surface font-semibold">Dune: Part Two</span></div>
              </div>
              <span className="text-[12px] text-on-surface-variant ml-auto">5h ago</span>
            </div>
            
            <div className="p-4 pb-4">
              <div className="flex gap-1 text-secondary mb-4 drop-shadow-[0_0_8px_rgba(76,215,246,0.8)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <p className="font-sans text-lg text-on-surface">
                Villeneuve has crafted a monumental sci-fi epic that surpasses the first in scale and emotion. The sound design alone deserves every technical award. A visceral cinematic experience that demands the biggest screen possible.
              </p>
            </div>
            
            <div className="p-4 flex items-center justify-between bg-[rgba(26,27,34,0.5)] border-t border-[rgba(255,255,255,0.05)] mt-auto">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-secondary bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-secondary group">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>sign_language</span>
                  <span className="font-sans text-sm font-semibold">112</span>
                </button>
                <button className="flex items-center gap-1 text-on-surface-variant bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary group">
                  <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                  <span className="font-sans text-sm font-semibold group-hover:text-primary">18</span>
                </button>
                <button className="flex items-center gap-1 text-on-surface-variant bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary group ml-2">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
              </div>
            </div>
          </article>

          {/* Feed Post 3: Recommendation */}
          <article className="bg-[rgba(30,31,38,0.6)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center gap-3 border-none pb-0">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                <img alt="Elena R" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvi48XUxkDc6cP4uSIkXmnEe3xHhVBGWV5nJtrij0tDT943FYn-lLDjyJ9ZJoqTkBzRBOYZ3sZk3tuuZM57mDWN7Qy6fCZhpz_bV_zLrLmM8VHpBzRO7BneXVnpvfzINw0spetU2oLVt1b0_lrPkk3E62SmP9-Dg4SIHQUdNorrDCbS9mPhvGgYO5Q-FIBTgrfLLKXbd2W8n1ToRf1GFexYVF5ReXu4NnvPCMdGVdBIQ7z3IsK7dbUCWXbKmbEhHlkYNuV9SY39aI" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="font-sans text-sm font-semibold text-on-surface">Elena R.</div>
                <div className="font-sans text-sm text-on-surface-variant">Suggests a film</div>
              </div>
            </div>
            
            <div className="p-4 pb-4 mt-4">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)] cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.3)] to-transparent z-10"></div>
                <img alt="Movie Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAiz-2W0926UQ2xWzooza71NKKApTRl23LQmu6ohUT6gmxyIEhbCByjFhcCcgzCfxKhlhat2beJZeCI-aHQKtJ-xyTzGChHgOCRIGRMLv2EkY1VLBiFLrZb0Xp9VqRbBZAcLOzt5_Z9X89JF09bDj8rz9xZ2YVeuqSMb9ZqjUbABZrSRVnJB_WLq_hn950c6rUuimPlX4Xomkzu965OZi85sYe0V9dnMNTzpGvTw-NljNl4uemY5pKJci298a5OSoiENujXXK_Eg0" />
                <div className="absolute bottom-0 left-0 w-full p-4 z-20 flex justify-between items-end">
                  <div>
                    <h4 className="font-heading text-[24px] font-semibold text-white mb-1 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">The Monolith</h4>
                    <p className="font-sans text-[16px] text-[rgba(255,255,255,0.8)]">Dir. K. Tanaka • 2024</p>
                  </div>
                  <button className="border-2 border-secondary text-secondary bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] rounded font-sans text-sm font-semibold px-4 py-2 uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:bg-[rgba(76,215,246,0.2)]">Waitlist</button>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex items-center justify-between bg-[rgba(26,27,34,0.5)] border-t border-[rgba(255,255,255,0.05)] mt-auto">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-on-surface-variant bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-secondary group">
                  <span className="material-symbols-outlined text-[20px]">sign_language</span>
                  <span className="font-sans text-sm font-semibold group-hover:text-secondary">45</span>
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* RIGHT COLUMN: Trending */}
        <aside className="hidden lg:flex flex-col gap-3 col-span-3">
          <div className="bg-[rgba(30,31,38,0.4)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col p-4">
            <h3 className="font-heading text-[24px] font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">local_fire_department</span>
              Trending Duels
            </h3>
            <div className="flex flex-col gap-4">
              <div className="cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-sans text-sm font-semibold text-primary">Sci-Fi Showdown</span>
                  <span className="text-[12px] text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">group</span> 1.2k</span>
                </div>
                <div className="font-sans text-sm text-on-surface-variant whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 group-hover:text-on-surface">Blade Runner vs Matrix</div>
              </div>
              <div className="cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-sans text-sm font-semibold text-secondary">Auteur Clash</span>
                  <span className="text-[12px] text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">group</span> 850</span>
                </div>
                <div className="font-sans text-sm text-on-surface-variant whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 group-hover:text-on-surface">Nolan&apos;s Best Pacing</div>
              </div>
              <div className="cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-sans text-sm font-semibold text-tertiary">Classic Horror</span>
                  <span className="text-[12px] text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">group</span> 640</span>
                </div>
                <div className="font-sans text-sm text-on-surface-variant whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 group-hover:text-on-surface">80s Practical Effects</div>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(30,31,38,0.4)] backdrop-blur-[20px] border border-[rgba(226,225,235,0.1)] rounded-xl overflow-hidden flex flex-col p-4 mt-4">
            <h3 className="font-heading text-[24px] font-semibold text-on-surface mb-2">Weekly Cinema Challenge</h3>
            <p className="font-sans text-sm text-on-surface-variant mb-4">Watch and review 3 foreign films before Sunday to earn the &apos;Subtitled&apos; badge.</p>
            <div className="w-full h-2 bg-surface-container-high rounded-full mb-2 overflow-hidden shadow-[inset_0_0_4px_rgba(208,188,255,0.2)]">
              <div className="h-full w-[33.333%] bg-primary shadow-[0_0_8px_var(--color-primary)]"></div>
            </div>
            <div className="text-right font-sans text-[12px] font-semibold text-on-surface-variant">1 / 3 Completed</div>
          </div>
        </aside>
      </div>
    </main>
  );
}

