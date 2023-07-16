import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        console.log(credentials.username);
        // check username existance
        const checkUsernameExistance = await prisma.admin.findUnique({
          where: {
            username: credentials.username,
          },
        });
        if (!checkUsernameExistance) {
          throw new Error("No user found with user name!");
        }
        console.log(checkUsernameExistance);
        console.log(credentials.password);
        // if username exist
        const checkPassword = await compare(credentials.password, checkUsernameExistance.password);
        console.log("password result", checkPassword);
        // incorrect password
        if (!checkPassword || checkUsernameExistance.username !== credentials.username) {
          throw new Error("Username or Password doesn't match");
        }
        return checkUsernameExistance;
      },
    }),
  ],
  secret: process.env.SECRET_JWT,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
