import { SignIn } from "@clerk/clerk-react";
import "./SignInPage.scss";

export function SignInPage() {
  return (
    <div className="sign-in-page">
      <SignIn />
    </div>
  );
}
