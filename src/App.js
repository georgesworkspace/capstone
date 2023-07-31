import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignUpImmigrant from "./pages/SignUpImmigrant";
import SignUpHelper from "./pages/SignUpHelper";
import Login from "./pages/Login/Login";
import Immigrant from "./pages/Immigrant";
import Helper from "./pages/Helper";

function App() {


  //   {/* // {isUserLoggedIn ? (
  // //   <Profile setIsUserLoggedIn={setIsUserLoggedIn} />
  // // ) : (
  // //   <Login setIsUserLoggedIn={setIsUserLoggedIn} />
  // // )} */}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/immigrant" element={<SignUpImmigrant />} />
        <Route path="/signup/helper" element={<SignUpHelper />} />
        <Route path="/immigrant" element={<Immigrant />} />
        <Route path="/helper" element={<Helper />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
