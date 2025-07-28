import { QwikAuth$ } from "@auth/qwik";
import GitHub from "@auth/qwik/providers/github";
import Discord from "@auth/qwik/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "~/lib/db";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub, Discord],
    adapter: PrismaAdapter(prisma),
  }),
);
