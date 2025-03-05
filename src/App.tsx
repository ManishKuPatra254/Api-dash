import { Fragment } from "react/jsx-runtime";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
