"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SquareUser } from "lucide-react";
import { signOut } from "next-auth/react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" transition cursor-pointer"
      >
        <SquareUser className="w-7 h-7 text-violet-500" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-black rounded-xl shadow-lg border py-2 z-50">
          <Link href={"/profile"}>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-800 cursor-pointer" >
              Profile
            </button>
          </Link>
          
          <Link href={"/dashboard"}>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-800 cursor-pointer" >
              Dashboard
            </button>
          </Link>
          
          <Link href={"/settings"}>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-800 cursor-pointer" >
              Settings
            </button>
          </Link>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-800 text-red-500 cursor-pointer" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}