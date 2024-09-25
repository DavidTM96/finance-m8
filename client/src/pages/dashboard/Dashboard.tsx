import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import { useMemo } from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import "./Dashboard.scss";
import { FinancialRecordForm } from "./FinancialRecordForm";
import { FinancialRecordList } from "./FinancialRecordList";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <div className="user-button-container">
        <UserButton />
        <SignOutButton redirectUrl="/auth" />
      </div>
      <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <FinancialRecordForm />
      <div>Total Monthly: ${totalMonthly}</div>
      <FinancialRecordList />
    </div>
  );
};
