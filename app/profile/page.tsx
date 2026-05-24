"use client"
import Image from "next/image";
import { BadgeCheck, Swords } from "lucide-react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";

export default function Profile() {
    
  const { data: session } = useSession();

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-6">
      <Navbar/>
      {/* Profile Header Bento */}
      <div className="relative w-full border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden bg-surface-container flex flex-col md:flex-row shadow-[4px_4px_0_var(--color-surface-container-lowest)] mt-20">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <div className="w-full h-full p-1">
            <Image src="/28851253856002618.jpg" width={1400} height={5} alt="Banner 1" className="object-cover"/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-[rgba(30,31,38,0.8)] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-[rgba(30,31,38,0.5)] to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center md:items-end gap-8 w-full">
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-secondary to-primary shadow-[0_0_20px_rgba(76,215,246,0.3)] animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                <img alt="Profile Picture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC8BYuXX6pqtXS-nbhxWzVFlKr988eaik6Fj3xGR7dU6Z_0qrbe7sKDLIoD9l85QotPl8p37EfldK6R_Fa8qpzJefMkJCywwb1fM7XOg81tm3RRFg_RNcSPPo1iMeNVX5G3PC2bOGwLpweLUTQaNxIIJhJ-_rKDaIIIEFwFmhYF2dA-VG1OIn3fB8sG9_XZr0uNaL920hK-p7KUPPuJrhvAhZVxnJRsc-VVWLWuUAkD9wMObVRaldJ1f5wuIVylyst_XY5daaVp1M" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-surface-container-high border border-[rgba(255,255,255,0.2)] rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
              <span className="material-symbols-outlined text-secondary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-sans text-sm font-semibold text-on-surface">Lv. 42</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1 gap-4">
            <div>
              <h1 className="font-heading text-[32px] font-bold text-on-surface flex items-center gap-2 justify-center md:justify-start">
                {session?.user?.name}
                <span className="material-symbols-outlined text-secondary text-[24px]" title="Verified Critic"><BadgeCheck/></span>
              </h1>
              <p className="font-sans text-[16px] text-on-surface-variant mt-1">Sci-Fi Specialist • 1,204 Watches • Top 5% Reviewer</p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              <button className="bg-primary text-on-primary font-sans text-sm font-semibold px-6 py-3 rounded border-none shadow-[4px_4px_0_#1e004a] cursor-pointer transition-all duration-200 active:shadow-none active:translate-x-1 active:translate-y-1">Follow</button>
              <button className="bg-transparent text-secondary font-sans text-sm font-semibold px-6 py-3 border-2 border-secondary rounded shadow-[4px_4px_0_var(--color-secondary)] cursor-pointer flex items-center gap-2 transition-all duration-200 hover:bg-[rgba(76,215,246,0.1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                <span className="material-symbols-outlined text-[18px]"><Swords/></span>
                Challenge to Duel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3">
        
        {/* Achievement Gallery */}
        <div className="border border-[rgba(255,255,255,0.1)] bg-[rgba(18,19,26,0.5)] backdrop-blur-[20px] rounded flex flex-col p-6 col-span-1 md:col-span-4 h-[380px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-[24px] font-semibold text-on-surface">Trophy Case</h2>
            <button className="bg-transparent border-none text-secondary cursor-pointer">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 overflow-y-auto content-start flex-1">
            <div className="flex flex-col items-center gap-2 relative cursor-help group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border-2 border-primary shadow-[0_0_10px_rgba(208,188,255,0.2)]">
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_movies</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface text-center uppercase tracking-wider font-semibold">Auteur</span>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container border border-[rgba(255,255,255,0.1)] px-3 py-1 rounded text-[12px] whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200 z-10 group-hover:opacity-100">Watched 100 Indie Films</div>
            </div>
            
            <div className="flex flex-col items-center gap-2 relative cursor-help group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border-2 border-secondary shadow-[0_0_10px_rgba(76,215,246,0.2)]">
                <span className="material-symbols-outlined text-secondary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface text-center uppercase tracking-wider font-semibold">Sci-Fi God</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 relative cursor-help group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border-2 border-tertiary shadow-[0_0_10px_rgba(255,176,205,0.2)]">
                <span className="material-symbols-outlined text-tertiary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface text-center uppercase tracking-wider font-semibold">Rom-Com</span>
            </div>

            <div className="flex flex-col items-center gap-2 relative cursor-help group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border-2 border-primary-container">
                <span className="material-symbols-outlined text-primary-container text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface text-center uppercase tracking-wider font-semibold">Historian</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 relative cursor-help group opacity-40 grayscale">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border border-outline">
                <span className="material-symbols-outlined text-on-surface-variant text-[32px]">swords</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface-variant text-center uppercase tracking-wider font-semibold">Duelist</span>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container border border-[rgba(255,255,255,0.1)] px-3 py-1 rounded text-[12px] whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200 z-10 group-hover:opacity-100">Win 50 Duels (Locked)</div>
            </div>

            <div className="flex flex-col items-center gap-2 relative cursor-help group opacity-40 grayscale">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-high border border-outline">
                <span className="material-symbols-outlined text-on-surface-variant text-[32px]">trophy</span>
              </div>
              <span className="font-sans text-[10px] text-on-surface-variant text-center uppercase tracking-wider font-semibold">Champion</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="border border-[rgba(255,255,255,0.1)] bg-[rgba(18,19,26,0.5)] backdrop-blur-[20px] rounded flex flex-col p-6 col-span-1 md:col-span-8 h-[380px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-[24px] font-semibold text-on-surface">Wall of Connections</h2>
            <span className="bg-surface-container px-3 py-1 rounded-full text-[12px] font-sans text-secondary border border-[rgba(76,215,246,0.3)]">12 Mutuals</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-surface-container-low border border-[rgba(255,255,255,0.05)] rounded p-4 flex flex-col">
              <div className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                Watch Time vs You
              </div>
              <div>
                <div className="mb-4">
                  <div className="flex justify-between text-[14px] mb-1">
                    <span className="text-on-surface">Alex</span>
                    <span className="text-secondary font-mono">1,420 hrs</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-high border border-[rgba(255,255,255,0.05)]">
                    <div className="h-full w-[85%] bg-secondary shadow-[0_0_10px_var(--color-secondary)]"></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-[14px] mb-1">
                    <span className="text-on-surface-variant">You</span>
                    <span className="text-primary font-mono">840 hrs</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-high border border-[rgba(255,255,255,0.05)]">
                    <div className="h-full w-[45%] bg-primary opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low border border-[rgba(255,255,255,0.05)] rounded p-4 flex flex-col">
              <div className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant mb-4 flex items-center gap-2">Top Mutuals</div>
              <div className="flex flex-col gap-3 overflow-y-auto">
                <div className="flex items-center justify-between p-1 rounded cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] group/mutual">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] overflow-hidden">
                      <img alt="Friend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6GTq9Rlt4eglyX56z--IxC6t0fMwudCrXipg3wEWQYCzEdr15iO8b4XTDyU1jpThh4FbO00wbDUhloNuIcpeKOOchqsOahW9i1Y1OPxbAwaHRJOK3LDuAO6DdxrSo7tz2NPm2ILLC3semEq8zedBqPp1SuOy-9b-VU60wdJJIOHsWNHQwWmV1onbbQTiTfVZZHJ7JMcc52y9qj0F2b6she4Yu7n4FbdTuDO2SEwfXMBp6LDWmJlTbFmFKkAd_Qu3Q6q1b-Qs_pA" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-sans text-[14px] text-on-surface transition-colors duration-200 group-hover/mutual:text-secondary">SarahJ_Crit</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_outward</span>
                </div>
                
                <div className="flex items-center justify-between p-1 rounded cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] group/mutual">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] overflow-hidden">
                      <img alt="Friend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3MrE8KUZyK_jmARGYAwDEzNcV93n7OuwqAPy3ERgFY9GbwXs4x9LuXQ99yRlEaKzZd1WIbeBqbeIBpk0S8VTHsHkdfqiECCzJUBbo0CB7poKndvnMujFeSU4WefWMD8nqIFV0fwRJCvbpxEGijmi_sdp5bJbBauRQR9SD8xFlFfYjhKMYC84DEwYOoSmbtlZ9mJo4E-HB9uVczwvC2Loa0wAT3vKxyPCmp9HoXRJqmAhei5LhPQRbpvj6dPOlfr8W95jaPsPEMS4" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-sans text-[14px] text-on-surface transition-colors duration-200 group-hover/mutual:text-secondary">FilmBro99</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_outward</span>
                </div>

                <div className="flex items-center justify-between p-1 rounded cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] group/mutual">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] overflow-hidden">
                      <img alt="Friend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCxxdT4TjWY9stgvPTTL5BW9hnuKCpyrRBAGnSD0CWgcFVh0vm3c02gcHpUmksKK0FKfpBDGF-tGl7nUmbnIEg5B7JFUV1Nd74ZU78CDMK_fMS0k7LbO0dtKQQK3__Cvf8AWXqvtUTGQus46UXR_T2VWWwQU1VRYjZNADHuFP3ByRmIVLqk3nv9koIzval_4k327wZ-J4LmiZLIt1Uw2vKGUG-iKaezZBNqjuYFeJLawN-fBBm0KIgdhqAXmTOmqqibCuMPxSMZMk" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-sans text-[14px] text-on-surface transition-colors duration-200 group-hover/mutual:text-secondary">Cinephile_Queen</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Vault */}
        <div className="border border-[rgba(255,255,255,0.1)] bg-[rgba(18,19,26,0.5)] backdrop-blur-[20px] rounded flex flex-col p-6 col-span-1 md:col-span-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h2 className="font-heading text-[24px] font-semibold text-on-surface">The Vault</h2>
              <p className="font-sans text-sm text-on-surface-variant">1,204 Logged Entries</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-surface-container-high rounded p-1 border border-[rgba(255,255,255,0.05)]">
                <button className="px-3 py-1 rounded text-secondary bg-surface border border-[rgba(255,255,255,0.1)] shadow-sm cursor-pointer flex items-center justify-center">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="px-3 py-1 rounded text-on-surface-variant bg-transparent border-none cursor-pointer flex items-center justify-center">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
              <button className="bg-surface-container border border-outline-variant rounded-full px-4 py-1.5 font-sans text-[12px] text-on-surface flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:border-secondary">
                Genre <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <button className="bg-surface-container border border-outline-variant rounded-full px-4 py-1.5 font-sans text-[12px] text-on-surface flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:border-secondary">
                Year <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <button className="bg-surface-container border border-outline-variant rounded-full px-4 py-1.5 font-sans text-[12px] text-on-surface flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:border-secondary">
                <span className="material-symbols-outlined text-[16px]">filter_list</span> Advanced
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="relative aspect-[2/3] rounded border border-[rgba(255,255,255,0.1)] overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-secondary hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] group">
              <img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEf48f8awulM6CX1TNV_-vXQbiamu_nSKEDHS_rIQt3TDxU_nvI3Lp_UqTz76TYt-y4fJkR03f8qCrcZPWz0GuBUaw5U8e_oOglIqdNOsSbi68FO3yQAEoT7JWKnIzDiC6ZXj0wUiiYp_1aTZA_d426d5uQp0LgJHO-F-9z64Km8OanLvpw40ATP4TLN3-G4fEkHOIaXfV1qBVRBAMAH_1-nW84H4rHO6w5_ttFsfQcsskPJm0lHohrVYJBUQz49OlolThsGUEOi8" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1">
                <h3 className="font-heading text-[14px] font-semibold text-white line-clamp-2">Neon Horizons</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-semibold text-secondary">Sci-Fi</span>
                  <div className="flex items-center gap-0.5 text-tertiary">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-semibold">4.5</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[14px]">visibility</span>
              </div>
            </div>

            <div className="relative aspect-[2/3] rounded border border-[rgba(255,255,255,0.1)] overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-secondary hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] group">
              <img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCGfCpjIIAe2Rz5qTA3Q2QeqWrqY0YftsTFEeshGJuQPgRh3IEb8HExc5Rn2TQMdLYroGL7kztBJ3o7NvITeckF2sbpEoADBQ4vWD67Qe_bWEOA12ai60weTmFyydfSsXSTiZHRiy6OrWsVzfIsQPSaJ8PQc5cyBIekjQ-B_t_hsaUuKnLu9tw9X1lJQ0QZM0oMbAWl_nYtMNsXY2LzgogqbWizO_Rc-0mIzzvrZbUJu-O-fQh9v2Al-0T5sa3PIKzqzUpeAj8HFg" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1">
                <h3 className="font-heading text-[14px] font-semibold text-white line-clamp-2">The Silent Peak</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-semibold text-primary">Thriller</span>
                  <div className="flex items-center gap-0.5 text-tertiary">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-semibold">5.0</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-[14px]">favorite</span>
              </div>
            </div>

            <div className="relative aspect-[2/3] rounded border border-[rgba(255,255,255,0.1)] overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-secondary hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] group">
              <img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ftnCX9dgcNb_54BNqid-1LJUfJQgH7nlfs6r1MEVomH-YqhhFlk03NWF3EsyYFGvZnT6DLUgu4KYbWGheAhyP-hrrjHCDrVaQMrDqjYiylE_oZ5hsEXMVHg9fUNuTiR1ZrMCPJw7VzgH9BiB1xwMOH-xBVvzVTU5akieWcxRFwzCcgpU2I_XJtWoW8QoNF5tLzjpA8Z-O83SP6hgp4gdshcRI1N0fUwC9gdAmTlQj2YaeqEX2p99P82NIequzs_I1BrdXD_CfuE" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1">
                <h3 className="font-heading text-[14px] font-semibold text-white line-clamp-2">Dust & Chrome</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-semibold" style={{ color: "var(--color-tertiary-container)" }}>Action</span>
                  <div className="flex items-center gap-0.5 text-tertiary">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-semibold">3.5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[2/3] rounded border border-[rgba(255,255,255,0.1)] overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-secondary hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] group">
              <img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf9VBTUsoMjELZwOBHmv8PgaHjpg3MnJh3ZqMJG8K0rXas4ZFPjzAI39UG9aigaQNdPaxKsl3t5q_CbUMpSVF9J-M_enIEVuav5Zdpc1mqiMYgk9zGJyNEJ-_wHuZpDDaV3m4tlbLft02JlYNp188g7dT517MxT9O-168oz79r_h3Gq_m-5UJauKXloH0Ef41OvCX0-f5qZt7oQZQzqkUROKsdHNPKkhqA3QJBBl7IhGRARcVt0F5lmFfg5CFl-dVDbijXWATav_c" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1">
                <h3 className="font-heading text-[14px] font-semibold text-white line-clamp-2">Cinema Paradiso</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-semibold text-outline">Classic</span>
                  <div className="flex items-center gap-0.5 text-tertiary">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-semibold">4.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[2/3] rounded border border-[rgba(255,255,255,0.1)] overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-secondary hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] group">
              <img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sMgzL1Vo5homCbbBM9jQA4PSvNj0WiFdJ1egXsOOCn1NmFjIqFckFRwyTQ93FuMhOelENGGDUoYuZEfLmfab2k0ecovRaUmwhHIbwPmyPu4PcSyWdiBs71u1rH8jDo97YYBDTiTpJHNII46iqNxIQjBr6EtA3aHouE2XKoeM6e6L3UIjIBDyMZRuktyeI_9_GILQYp_QqPCtNC48Fo3o-7P4rNqjcYA2kZr2WTthg7FWQddM-bAJkJstPdNJRMWRncL0C-xQ3ZQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1">
                <h3 className="font-heading text-[14px] font-semibold text-white line-clamp-2">System Error</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-semibold text-secondary">Sci-Fi</span>
                  <div className="flex items-center gap-0.5 text-tertiary">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-semibold">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center w-full mt-8">
            <button className="bg-surface-container border border-[rgba(255,255,255,0.1)] text-on-surface font-sans text-[14px] font-semibold px-6 py-2 rounded cursor-pointer transition-colors duration-200 hover:bg-surface-variant">Load More Entries</button>
          </div>
        </div>

      </div>
    </main>
  );
}
