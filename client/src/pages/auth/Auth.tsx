import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Dashboard } from "../dashboard/Dashboard";
import "./Auth.scss";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1> Welcome to Your Own Personal Finance Tracker!</h1>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
};
