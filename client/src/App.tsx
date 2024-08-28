import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./pages/auth";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
