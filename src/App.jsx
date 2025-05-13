import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './components/landing/Landing';
import AllModal from './components/landing/AllModal';
import ScrollToTop from './components/ScrollTop';
import SearchFilters from './components/searchFilters/SearchFilters';
import SearchLocation from './components/searchLocation/SearchLocation';
import Profile from './components/profile/Profile';
import Notifications from './components/notifications/Notifications';
import Mailbox from './components/mailbox/Mailbox';
import EditProfile from './components/profile/EditProfile';
import Terms from './components/terms/Terms';
import Privacy from './components/privacy/Privacy';
import CookiePolicy from './components/cookie-policy/CookiePolicy';
import SafetyTips from './components/safety-tips/SafetyTips';
import UpdateLocation from './components/settings/UpdateLocation';
import UpgradePremium from './components/settings/UpgradePremium';
import ForgotPassword from './components/settings/ForgotPassword';
import EnterNewPassword from './components/settings/EnterNewPassword';
import PasswordChanged from './components/settings/PasswordChanged';
import SignIn from './components/settings/SignIn';
import HideProfile from './components/settings/HideProfile';
import Logout from './components/settings/Logout';
import DeleteAccount from './components/settings/DeleteAccount';
import ContactUs from './components/contactUs/ContactUs';
import Photog from './components/Photog';
import Faq from './components/faq/Faq';
import SearchResultsTwo from './components/searchResultTwo/SearchResultsTwo';
import EditBasics from './components/editBasics/EditBasics';
import SignUp from './components/landing/signUp/SignUp';
import Disclaimer from './components/landing/disclaimer/Disclaimer';
import Covid19 from './components/landing/covid19/Covid19';
import VerifyEmail from './components/landing/verifyEmail/VerifyEmail';
import VerifyCode from './components/landing/verifyCode/VerifyCode';
import EmailVerified from './components/landing/emailVerified/EmailVerified';
import Login from './components/landing/login/Login';
import Location from './components/landing/location/Location';
import AboutYou from './components/landing/aboutYou/AboutYou';
import Basics from './components/landing/basics/Basics';
import Headline from './components/landing/headline/Headline';
import Compliment from './components/landing/compliment/Compliment';
import Dealbreaker from './components/landing/dealbreaker/Dealbreaker';



import UploadPhoto from './components/landing/uploadPhoto/UploadPhoto';
import MyLikes from './components/connections/myLikes/MyLikes';
import YourMatches from './components/connections/yourMatches/YourMatches';
import BlockedUsers from './components/connections/blockedUsers/BlockedUsers';
import WhoLkesYou from './components/connections/whoLkesYou/WhoLkesYou';
import WhoViewedYou from './components/connections/whoViewedYou/WhoViewedYou';
import UploadPhotoUser from './components/uploadPhotoUser/UploadPhotoUser';
import ManageMedia from './components/settings/ManageMedia';
import Report from './components/profile/Report';
import Liveusers from './components/live-users/Liveusers';
import Loginr from './components/landing/loginr/Loginr';






function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div>
          <Switch>
          <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/covid">
              <Covid19 />
            </Route>
            <Route path="/verify-email">
              <VerifyEmail />
            </Route>
            <Route path="/verify-code">
              <VerifyCode />
            </Route>
            <Route path="/email-verified">
              <EmailVerified />
            </Route>
            <Route path="/sign-in">
              <SignIn/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/loginr">
             <Loginr/>
            </Route>
            
            <Route path="/location">
              <Location/>
            </Route>
            <Route path="/headline">
              <Headline/>
            </Route>
            <Route path="/compliment">
              <Compliment/>
            </Route>
            <Route path="/dealbreaker">
              <Dealbreaker/>
            </Route>
            

            <Route path="/about-you">
              <AboutYou/>
            </Route>
            <Route path="/all-modal">
              <AllModal />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/edit-profile">
              <EditProfile/>
            </Route>

            <Route path="/basics">
              <Basics />
            </Route>
            <Route path="/edit-basics">
              <EditBasics />
            </Route>
           
           
            <Route path="/search-filters">
              <SearchFilters />
            </Route>
            <Route path="/live-users">
              <Liveusers />
            </Route>
            <Route path="/upload-photo">
              <UploadPhoto/>
            </Route>
            <Route path="/upload-photo-user">
              <UploadPhotoUser/>
            </Route>
            
            <Route path="/search-location">
              <SearchLocation />
            </Route>
            {/* <Route path="/search-results">
              <SearchResults />
            </Route> */}
            <Route path="/search-results">
              <SearchResultsTwo />
            </Route>
            <Route path="/who-viewed-you">
              <WhoViewedYou />
            </Route>

            <Route path="/who-likes-you">
              <WhoLkesYou />
            </Route>

            <Route path="/my-likes">
              <MyLikes/>
            </Route>
            <Route path="/your-matches">
              <YourMatches />
            </Route>
            <Route path="/blocked-users">
              <BlockedUsers />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/mailbox">
              <Mailbox />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/privacy">
              <Privacy/>
            </Route>
            <Route path="/cookie-policy">
              <CookiePolicy/>
            </Route>
            <Route path="/safety-tips">
              <SafetyTips/>
            </Route>
            <Route path="/faq">
              <Faq/>
            </Route>
            <Route path="/update-location">
              <UpdateLocation/>
            </Route>
            <Route path="/upgrade-premium">
              <UpgradePremium/>
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword/>
            </Route>
            <Route path="/reset-password">
              <EnterNewPassword/>
            </Route>
            <Route path="/password-changed">
              <PasswordChanged/>
            </Route>
            <Route path="/hide-profile">
              <HideProfile/>
            </Route>
            <Route path="/manage-media">
              <ManageMedia/>
            </Route>

            <Route path="/delete-account">
              <DeleteAccount/>
            </Route>
            <Route path="/report">
              <Report/>
            </Route>
            <Route path="/photoall">
              <Photog/>
            </Route>
            <Route path="/logout">
              <Logout/>
            </Route>
           
            <Route path="">
              <Landing />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
