
import { signIn } from "../../../auth"
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("duende-identity-server6")
      }}
    >
      <button type="submit">Signin with DuendeIDS6Provider</button>
    </form>
  )
} 