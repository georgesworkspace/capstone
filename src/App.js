import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignUpImmigrant from "./pages/SignUpImmigrants/SignUpImmigrants";
import SignUpHelper from "./pages/SignUpHelper";
import Login from "./pages/Login/Login";
import Immigrant from "./pages/Immigrant";
import Helper from "./pages/Helper";
import SignUpEmployer from "./pages/SignUpEmployer";
import HelperDetail from "./pages/HelperDetail";
import EmployerDetail from "./pages/EmployerDetail";
import Chinese from "./pages/Chinese";
import Employer from "./pages/Employer";
function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/immigrant" element={<SignUpImmigrant />} />
        <Route path="/signup/helper" element={<SignUpHelper />} />
        <Route path="/signup/employer" element={<SignUpEmployer />} />
        <Route path="/immigrant" element={<Immigrant />} />
        <Route path="/helper" element={<Helper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/helperdetail" element={<HelperDetail />} />
        <Route path="/employerdetail" element={<EmployerDetail />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/chinese" element={<Chinese />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
