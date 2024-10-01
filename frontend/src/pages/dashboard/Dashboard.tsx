import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import { DollarSign } from "lucide-react";
import { useMemo } from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import "./Dashboard.scss";
import { FinancialRecordForm } from "./FinancialRecordForm";
import { FinancialRecordList } from "./FinancialRecordList";

export const BASE_CLASS = "dashboard";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount.toFixed(2);
  }, [records]);

  return (
    <div className={`${BASE_CLASS}__container`}>
      <header className={`${BASE_CLASS}__header`}>
        <h1 className={`${BASE_CLASS}__header-title`}>Finance M8</h1>
        <div className={`${BASE_CLASS}__header-sign-out-box`}>
          <UserButton />
          <SignOutButton redirectUrl="/auth">
            <button className={`${BASE_CLASS}__sign-out-btn`}>Sign Out</button>
          </SignOutButton>
        </div>
      </header>
      <div className={`${BASE_CLASS}__form-list`}>
        <h2 className={`${BASE_CLASS}__form-list-title`}>
          Welcome {user?.firstName}! Here Are Your Finances:
        </h2>
        <FinancialRecordForm />
        <div className="total-monthly-box">
          <h3 className="total-monthly-title">Balance</h3>
          <p className="total-monthly-text">
            <DollarSign />
            {totalMonthly}
          </p>
        </div>
        <FinancialRecordList />
      </div>
    </div>
  );
};
