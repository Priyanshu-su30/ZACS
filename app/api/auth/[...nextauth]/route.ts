import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user || !user.passwords) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.passwords
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          movie: user.movie,
          series: user.series,
          level: user.level,
          XP: user.XP,
          rank: user.rank,
          watches: user.watches,
          followers: user.followers,
          following: user.following,
          trophy: user.trophy,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        await prisma.user.upsert({
          where: {
            email: user.email,
          },
          update: {
            name: user.name,
          },
          create: {
            email: user.email,
            name: user.name,
          },
        });
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = (user as { username?: string | null }).username;
        token.movie = (user as { movie?: string | null }).movie;
        token.series = (user as { series?: string | null }).series;
        token.level = (user as { level?: number | null }).level;
        token.XP = (user as { XP?: number | null }).XP;
        token.rank = (user as { rank?: string | null }).rank;
        token.watches = (user as { watches?: number | null }).watches;
        token.followers = (user as { followers?: number | null }).followers;
        token.following = (user as { following?: number | null }).following;
        token.trophy = (user as { trophy?: string | null }).trophy;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.movie = token.movie as string;
        session.user.series = token.series as string;
        session.user.level = token.level as number;
        session.user.XP = token.XP as number;
        session.user.rank = token.rank as string;
        session.user.watches = token.watches as number;
        session.user.followers = token.followers as number;
        session.user.following = token.following as number;
        session.user.trophy = token.trophy as string;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
