import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string | null;
      movie?: string | null;
      series?: string | null;
      level?: number;
      XP?: number;
      rank?: string | null;
      watches?: number;
      followers?: number;
      following?: number;
      trophy?: string | null;
    } & DefaultSession["user"];
  }
}