import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProtectedRoute from "./components/ProtectedRoute.tsx"

import "./App.css";
import LandingPage from "@/pages/LandingPage.tsx";
// import Introduction from "@/pages/Introduction";
import UnitManagment from "@/pages/UnitManagment";
import Login from "./pages/Login.tsx";
// test
function App() {


 // function Logout() {
   // localStorage.clear()
   // return <Navigate to="/login" />
  //}
  
  //function RegisterAndLogout() {
  //  localStorage.clear()
  //  return <Register />
  //}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <UnitManagment />
            </ProtectedRoute>
          }
        />
         <Route path="/login" element={<Login />} />
         {/*
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} /> */}
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



