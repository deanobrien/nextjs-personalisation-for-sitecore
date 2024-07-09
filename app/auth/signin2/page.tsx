import { getServerSession } from "next-auth"

export default function Component() {
  const session = getServerSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return <a href="/api/auth/signin">Sign in</a>
}