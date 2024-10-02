import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Dashboard } from "../dashboard/Dashboard";
import { SignInPage } from "../SignInPage/SignInPage";
import "./Auth.scss";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
};
