import SignUp from "../pages/signUp/signUp";
import "./App.css";
import "../styles/global.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "../pages/Login/login";
import EmailVerification from "../pages/emailOtp/emailOtp";
import Home from "../pages/home/home";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      {/* <Login /> */}
      {/* <SignUp/> */}
      {/* <EmailVerification/> */}
      <Home/>
    </GoogleOAuthProvider>
  );
}

export default App;
