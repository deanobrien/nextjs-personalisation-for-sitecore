
import { auth } from "../../../auth"
import { SignIn, SignOut } from "./AuthComponents"

export default async function UserButton() {
  const session = await auth()
  if (!session?.user) return <SignIn />
  return (
    <div>
      <span className="username"> {session.user.email} <SignOut /></span>
    </div>
  )
}
