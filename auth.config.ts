import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  basePath: "/auth",
  callbacks: {
	authorized({ auth, request: { nextUrl } }) {
		// You could add logic here to restrict access to soecific pages
		// See https://nextjs.org/learn/dashboard-app/adding-authentication
		return true;
	},
  },
  providers: [],
} satisfies NextAuthConfig;