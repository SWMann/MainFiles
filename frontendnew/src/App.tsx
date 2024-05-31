import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ProtectedRoute from "./components/ProtectedRoute.tsx"

import "./App.css";
import LandingPage from "@/pages/LandingPage.tsx";
// import Introduction from "@/pages/Introduction";
import UnitManagment from "@/pages/UnitManagment";
import Login from "./pages/Login.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import Register from "@/pages/Register.tsx"
import ProfilePage from "./pages/Profile.tsx";

// test
function App() {


  function Logout() {
   localStorage.clear()
   return <Navigate to="/login" />
  }
  
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }

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
                <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
         <Route path="/login" element={<Login />} />
         
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} /> 
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
    
    </>
  );
}

export default App;



