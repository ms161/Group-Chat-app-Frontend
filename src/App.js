import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/pages/SignupPage";

function App() {
  return (
    <div className="">
      <Routes>

        <Route index element={<SignUpPage/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
