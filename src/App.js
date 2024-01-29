import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <div className="">
      <Routes>

        <Route index element={<SignUpPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
