import { Route, Routes } from "react-router-dom";
import { Preview } from "./components/Preview";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { NotFound } from "./components/NotFound";
import { Dashboard } from "./components/Dashboard";
import { ForgotPass } from "./components/ForgotPass";
import { AboutUs } from "./components/AboutUs";
import { Jobs } from "./components/Jobs";
import { InterView } from "./components/InterView";
import { ContactUs } from "./components/ContactUs";
import { CheckEmail } from "./components/CheckEmail";
import { SetNewPass } from "./components/SetNewPass";
import { Confirmation } from "./components/Confirmation";
import { UserProfile } from "./components/UserProfile";
import { Settings } from "./components/Settings";
import { useEffect, useState } from "react";
import { PersonalInfo } from "./components/PersonalInfo";
import { CareerInfo } from "./components/CareerInfo";
import { JobDetails } from "./components/JobDetails";
import { CompanyDetials } from "./components/CompanyDetials";
import { JobSearch } from "./components/JobSearch";
import { History } from "./History";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resetPassStatus, setResetPassStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({
    educations: [],
    personal_information: {},
    projects: [],
    skills: [],
    work_experiences: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Preview loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        {!loggedIn && (
          <>
            <Route
              path='/login'
              element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route
              path='/signup'
              element={<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
          </>
        )}
        <Route
          path='/aboutus'
          element={<AboutUs loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route
          path='/forgotpassword'
          element={<ForgotPass setResetPassStatus={setResetPassStatus} />}
        />
        {resetPassStatus && (
          <>
            <Route path='/check-email' element={<CheckEmail />} />
            <Route path='/setnewpassword' element={<SetNewPass />} />
            <Route path='/confirmation' element={<Confirmation />} />
          </>
        )}
        {loggedIn && (
          <>
            <Route
              path='/userprofile'
              element={
                <UserProfile
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  userData={userInfo}
                />
              }
            />
            <Route
              path='/dashboard'
              element={
                <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              }
            />
            <Route path='/interview' element={<InterView />} />
            <Route
              path='/settings'
              element={
                <Settings
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
              }
            />
          </>
        )}
        <Route path='/personal-info' element={<PersonalInfo />} />
        <Route path='/job-details/:id' element={<JobDetails />} />
        <Route path='/company-details/:id' element={<CompanyDetials />} />
        <Route path='/career-info' element={<CareerInfo />} />
        <Route path='/job-search' element={<JobSearch />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
