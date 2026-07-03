import CreateAccount from "./pages/Createacc";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import AccountSetting from "./pages/AccountSetting";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSetting/>} />

      </Routes>
    </div>
  )
}

export default App; 