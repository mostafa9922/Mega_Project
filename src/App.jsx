import { Route, Routes } from "react-router-dom";
import { Preview } from "./components/Preview";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { NotFound } from "./components/NotFound";
import { Profile } from "./components/Profile";
import { ForgotPass } from "./components/ForgotPass";
import { AboutUs } from "./components/AboutUs";
import { Jobs } from "./components/Jobs";
import { InterView } from "./components/InterView";
import { ContactUs } from "./components/ContactUs";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/interview' element={<InterView />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/forgotpassword' element={<ForgotPass />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
