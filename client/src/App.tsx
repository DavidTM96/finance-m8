import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { Auth } from "./pages/auth/Auth";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
