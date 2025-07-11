import { emailFrom } from "@/config/config";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { customSession } from "better-auth/plugins";
import { magicLink } from "better-auth/plugins/magic-link";
import MagicLinkEmail from "../../emails/MagicLink";
import { prisma } from "./db";
import { resend } from "./resend";
import { stripe } from "./stripe";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [
    magicLink({
      async sendMagicLink(data) {
        "use server";

        await resend.emails.send({
          from: emailFrom ?? "delivered@resend.dev",
          to: data.email,
          subject: "Your magic link",
          react: MagicLinkEmail({ magicLink: data.url }),
        });
      },
    }),
    customSession(async ({ user, session }) => {
      const role = await prisma.user.findUnique({
        where: {
          id: user?.id,
        },
        select: {
          role: true,
        },
      });

      return {
        user: {
          ...user,
          role,
        },
        session,
      };
    }),
  ],
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          const userId = user?.id;
          const email = user?.email;
          const name = user?.name;

          if (!userId || !email) {
            return;
          }

          const stripeCustomer = await stripe.customers.create({
            email,
            name: name ?? undefined,
          });

          await prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              stripeCustomerId: stripeCustomer?.id,
            },
          });
        },
      },
    },
  },
});
