import NextAuth from "next-auth";
// import Providers from "next-auth/providers/";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId:
        "601621850906-1nn03iov4d6uin8g5lpvgt2ujccmmipb.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  database: "",
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `https://admin.artistfirst.in/api/auth/google/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
