import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "255151939242-cecntcovovrd7b1us9s2o3p5ic0tquhu.apps.googleusercontent.com",
      clientSecret: "your_google_client_secret", // Hardcoded
    }),
  ],
  secret: "your_next_auth_secret",
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
