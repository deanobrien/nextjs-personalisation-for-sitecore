import NextAuth from 'next-auth';
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"
//import { authConfig } from './auth.config';
 
const providers: Provider[]  = [
    
	DuendeIDS6Provider({
		clientId: "SitecoreCredentials",
		clientSecret: "Northumbria@1",
		issuer: "https://identity-devint.northumbria.ac.uk",
		authorization: "https://identity-devint.northumbria.ac.uk/connect/authorize?scope=openid+sitecore.profile+email+profile",
		async authorize() {return true;},
		async profile(profile, tokens, email) {
			const response = await fetch(
				`https://identity-devint.northumbria.ac.uk/connect/userinfo`,
				{ headers: { Authorization: `Bearer ${tokens.access_token}` }, scope: "sitecore.profile" }
			)
			const json = await response.json()
			return {
				id: profile.sub,
				name: json.first,
				email: json.email,
				access_token: tokens.access_token
			}
		},
    })
  ]
  
export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  basePath: "/auth",
  //...authConfig,
  providers,
  session: {
	strategy: 'jwt',
	maxAge: 30 * 24 * 60 * 60, // 30 days
},
  callbacks: {
	authorized({ auth, request: { nextUrl } }) {
		// You could add logic here to restrict access to soecific pages
		// See https://nextjs.org/learn/dashboard-app/adding-authentication
		return true;
	},
	jwt: async ({ token, user, account }) => {
		if (account && account.access_token) {
			// set access_token to the token payload
			token.accessToken = account.access_token
		}

		return token
	},
	async session({ session, token}) {
       return { ...session, token: token.accessToken }
     },
  }
}) satisfies NextAuthConfig;
