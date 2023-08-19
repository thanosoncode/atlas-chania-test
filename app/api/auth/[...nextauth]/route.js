import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { SessionStrategy } from "next-auth";

const authOptions = {
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      const allowedEmails = [process.env.THANOS, process.env.GIANNIS];

      if (!allowedEmails.includes(profile.email)) {
        return false;
      } else {
        return true;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/new-post";
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
