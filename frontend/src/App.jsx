import SignUp from "../pages/signUp/signUp";
import "./App.css";
import "../styles/global.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <SignUp />
    </GoogleOAuthProvider>
  );
}

export default App;
