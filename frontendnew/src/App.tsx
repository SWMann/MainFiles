import "./App.css";
import LandingPage from "@/pages/LandingPage.tsx";
import Introduction from "@/pages/Introduction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnitManagment from "@/pages/UnitManagment";
// test
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/unitmanagment" element={<UnitManagment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
