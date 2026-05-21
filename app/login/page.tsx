"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SignupModal from "@/components/SignupModal";
import { useState } from "react";
import PixelSnow from '../../components/pixelsnow';

export default function Home() {

  const { data: session } = useSession();

  const [openSignup, setOpenSignup] =
    useState(false);

  return (
    <>
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <PixelSnow 
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
    />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <main className="grow flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 md:px-6 relative z-[5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-center min-h-screen">
          {/* Left: Hero Text & Actions */}
          <div className="flex flex-col gap-6 relative z-[10]">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-[32px] font-bold italic text-primary tracking-widest uppercase">ZACS</span>
              <div className="h-1 w-12 bg-secondary ml-2"></div>
            </div>
            
            <h1 className="font-heading text-[48px] lg:text-[64px] font-extrabold uppercase text-foreground leading-[1.1] tracking-tight">
              DON&apos;T JUST WATCH.<br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">WIN.</span>
            </h1>
            
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              The world&apos;s first social arena for cinephiles. Track, compete, and climb the ranks.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/dashboard" className="bg-primary text-on-primary px-8 py-4 rounded font-sans text-sm font-semibold uppercase tracking-wider cursor-pointer shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all duration-200 hover:shadow-none hover:translate-x-1 hover:translate-y-1 inline-block text-center">
                Join the League
              </Link>
              <button className="bg-transparent text-secondary border-2 border-secondary px-8 py-4 rounded font-sans text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:bg-secondary/10">
                Watch the Trailer
              </button>
            </div>
          </div>
          
          {/* Right: 3D Render & Auth Card */}
          <div className="relative w-full h-full min-h-90 flex items-center justify-center ">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXe_eSjKc7hv3UofQbCOgPbAnCHVUzEKqLihNC_X62afnBvzxzhVZGfe5m18lzh8Um5ntn6t61jLjCG6KQAsLXS8VYOSoAFGooRmOrxZlNK0U304115HtfyDi5txvdudeGECIxoSDsCzWI71r01CQJCs76X2qQU0Z9uEBHcUasE168gTw7T2kRM0U_YEuHmP9sCd1qQjWxJVQoVAJrBCVzyqEHU0xl7P7bzVG4fkiMDtBTqD6Zy1Jk9FeTYuIizE40aBPU-BlolFw')] bg-contain bg-center bg-no-repeat" title="3D render of a futuristic gold and neon violet cinematic trophy"></div>
            
            <div className={`glass-panel p-8 rounded-xl w-full max-w-md relative z-10 flex flex-col gap-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]`}>
              <div className="text-center">
                <h2 className="text-[24px] mb-2 font-heading font-semibold">Enter the Arena</h2>
                <p className="text-on-surface-variant text-[16px]">Sign in to claim your profile</p>
              </div>
              <div>
                {!session ? (
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => signIn("google", {callbackUrl: "/dashboard",})}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors hover:cursor-pointer"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign in with Google
                    </button>

                    <div className="flex items-center gap-4 py-2">
                      <div className="h-px bg-outline-variant grow"></div>
                      <span className="text-sm font-semibold text-outline">OR</span>
                      <div className="h-px bg-outline-variant grow"></div>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target as HTMLFormElement);
                      const username = formData.get('username') as string;
                      const password = formData.get('password') as string;
                      signIn("credentials", { username, password });
                    }} className="flex flex-col gap-3">
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        required
                        className="px-4 py-3 rounded-lg border border-outline-variant bg-transparent text-on-surface-variant placeholder:text-outline focus:outline-none focus:border-primary"
                      />
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        className="px-4 py-3 rounded-lg border border-outline-variant bg-transparent text-on-surface-variant placeholder:text-outline focus:outline-none focus:border-primary"
                      />
                      <button
                        type="submit"
                        className="bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors hover:cursor-pointer"
                      >
                        Sign in with Credentials
                      </button>
                    </form>
                  </div>
                ) : (
                  <>
                    <p>Welcome {session.user?.name}</p>
                    <button onClick={() => signOut()}>
                      Sign out
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center gap-2">
                <p className="">Not Registered?</p> 
                <button
                  onClick={() => setOpenSignup(true)}
                  className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
                >
                  Signup
                </button>
              </div>

              <SignupModal
                isOpen={openSignup}
                onClose={() => setOpenSignup(false)}
              />
              
              <div className="text-center">
                <p className="text-sm font-semibold text-on-surface-variant mb-3 uppercase tracking-wider">Pick Your Starter Genre</p>
                <div className="grid grid-cols-3 gap-3">
                  <button className="group flex flex-col items-center justify-center p-3 border border-outline-variant rounded bg-transparent text-on-surface-variant cursor-pointer transition-all duration-200 hover:border-secondary hover:text-secondary">
                    <span className="material-symbols-outlined text-[24px] mb-1 transition-transform duration-200 group-hover:scale-110">skull</span>
                    <span className="text-[10px] font-semibold uppercase">Horror</span>
                  </button>
                  <button className="group flex flex-col items-center justify-center p-3 border border-outline-variant rounded bg-transparent text-on-surface-variant cursor-pointer transition-all duration-200 hover:border-primary hover:text-primary">
                    <span className="material-symbols-outlined text-[24px] mb-1 transition-transform duration-200 group-hover:scale-110">rocket_launch</span>
                    <span className="text-[10px] font-semibold uppercase">Sci-Fi</span>
                  </button>
                  <button className="group flex flex-col items-center justify-center p-3 border border-outline-variant rounded bg-transparent text-on-surface-variant cursor-pointer transition-all duration-200 hover:border-tertiary hover:text-tertiary">
                    <span className="material-symbols-outlined text-[24px] mb-1 transition-transform duration-200 group-hover:scale-110">theater_comedy</span>
                    <span className="text-[10px] font-semibold uppercase">Drama</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* <div className="w-full bg-surface-container-high border-y border-outline-variant py-3 overflow-hidden whitespace-nowrap relative z-20">
        <div className="inline-flex gap-12 text-sm font-semibold text-secondary tracking-widest uppercase animate-marquee">
          <span><span className="text-primary">• LIVE DUEL:</span> CineSnob leading PopcornKing in &apos;Dune: Part Two&apos; trivia</span>
          <span><span className="text-primary">• NEW BOUNTY:</span> Review 5 A24 films to unlock &apos;Indie Darling&apos; badge</span>
          <span><span className="text-primary">• LEADERBOARD:</span> User_Zero just hit Grandmaster rank</span>
          <span><span className="text-primary">• LIVE DUEL:</span> CineSnob leading PopcornKing in &apos;Dune: Part Two&apos; trivia</span>
          <span><span className="text-primary">• NEW BOUNTY:</span> Review 5 A24 films to unlock &apos;Indie Darling&apos; badge</span>
          <span><span className="text-primary">• LEADERBOARD:</span> User_Zero just hit Grandmaster rank</span>
        </div>
      </div> */}
      
</div>
    </>
  );
}
