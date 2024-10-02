import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/auth" />
      </SignedOut>
    </>
  );
}
