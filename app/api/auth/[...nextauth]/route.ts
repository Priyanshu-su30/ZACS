import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
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
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        });

        if (!user || !user.passwords) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.passwords);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
        };
      }
    }),
  ],

  callbacks: {
    // 🔥 THIS runs after Google login
    async signIn({ user, account, profile }) {
      console.log("USER:", user);         // basic user info
      console.log("ACCOUNT:", account);   // provider details
      console.log("PROFILE:", profile);   // 🔥 Google profile data
      if (account?.provider === "google") {

        await prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            name: user.name, // update existing user name
          },
          create: {
            email: user.email!,
            name: user.name,
          },
        });
      }
      return true; // allow login
    },

    // Add extra data to session
    async session({ session, user }) {
        if (session.user) {
          const customUser = user as any;
          session.user.id = customUser.id;
          session.user.username = customUser.username;
          session.user.movie = customUser.movie;
          session.user.series = customUser.series;
          session.user.level = customUser.level;
          session.user.XP = customUser.XP;
          session.user.rank = customUser.rank;
          session.user.watches = customUser.watches;
          session.user.followers = customUser.followers;
          session.user.following = customUser.following;
          session.user.trophy = customUser.trophy;
        }
        return session;
    },

    // Modify JWT token
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },

  session: {
    strategy: "database",
  },
});

export { handler as GET, handler as POST };