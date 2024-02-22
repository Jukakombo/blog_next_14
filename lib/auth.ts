import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import connectionDb from "./utils";
import { User } from "./model";
import credentialsProviders from "next-auth/providers/credentials";

const login = async (credentials: { username: string; password: string }): Promise<User> => {
  try {
    connectionDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials!");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "7fa9f6f9b86e753c7c53",
      clientSecret: "bb1151437315d896f18a4cc629a92926713c4212",
    }),
    credentialsProviders({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === "github") {
        connectionDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
  },
});