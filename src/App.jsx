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
import { CheckEmail } from "./components/CheckEmail";
import { SetNewPass } from "./components/SetNewPass";
import { Confirmation } from "./components/Confirmation";
import { UserProfile } from "./components/UserProfile";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Preview loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path='/login'
          element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/interview' element={<InterView />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/check-email' element={<CheckEmail />} />
        <Route path='/setnewpassword' element={<SetNewPass />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/forgotpassword' element={<ForgotPass />} />
        <Route
          path='/profile'
          element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
