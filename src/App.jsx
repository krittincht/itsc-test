import logo from 'logo.svg';
import 'App.css';
import "assets/css/notosansthai.css";
import "assets/css/kanit.css";

import { LoginPage } from 'components/pages/login';
import { OtpPage } from 'components/pages/otp';
import { TermsPage } from 'components/pages/terms';
import { HomePage } from 'components/pages/home';
import { AppointmentPage } from 'components/pages/appointment';
import { HistoryPage } from 'components/pages/history';
import { AccountPage } from 'components/pages/account';
import { QuestionPage } from 'components/pages/question';
import { LoadPage } from 'components/pages/load';

import { LayoutBottomNav } from 'components/layouts/bottomnav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams 
} from "react-router-dom";



function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="/load" element={<LoadPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/appointment/:expertID" element={<AppointmentPage />} />
        <Route path="/question" element={<QuestionPage />} />

        <Route path="/" element={<LayoutBottomNav />}>
          <Route path="/" element={<LoadPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Route>

 
      

    </Routes>
  );
  
}

function Layout() {


  return (

    <div className="wrapper">
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;