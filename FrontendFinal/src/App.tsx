import "./App.css";
import LandingPage from "@/pages/LandingPage.tsx";
import Introduction from "@/pages/Introduction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnitManagment from "@/pages/UnitManagment";
import MOSList from "@/pages/MOSList";

import ApplicationRedirect from "@/pages/ApplicationRedirect";
import MOSDetailPage from "./pages/MOSDetailPage";
import PolicyTablePage from "./pages/PolicyTablePage";
// test
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/unitmanagment" element={<UnitManagment />} />
          <Route path="/redirect" element={<ApplicationRedirect />} />
          <Route path="/MOSList" element={<MOSList />} />
          <Route path="/PolicyList" element={<PolicyTablePage />} />

          <Route path="/MOSDetail/:id/" element={<MOSDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
