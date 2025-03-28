import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Preview } from "./components/Preview";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { NotFound } from "./components/NotFound";
import { Profile } from "./components/Profile";
import { ForgotPass } from "./components/ForgotPass";
import { AboutUs } from "./components/AboutUs";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/forgotpassword' element={<ForgotPass />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
