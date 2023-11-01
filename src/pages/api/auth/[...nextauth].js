import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import MyListing from "@/pages/MyListing";
const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const body = JSON.stringify({
          email,
          password,
        });

        const res = await fetch(`http://localhost:3000/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
          },
          body: body,
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    }
  },
  
  pages: {
    signIn: "/Login",
  },
  session: {
 
    maxAge:  30 * 24 * 60 * 60, 
  },
  jwt:{
    maxAge:  30 * 24 * 60 * 60, 
  }
}

export default NextAuth(authOptions);
