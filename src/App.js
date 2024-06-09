import {Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import Organisation from "./pages/Dashboard/Organisation";
import Consumer from "./pages/Dashboard/Consumer";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
     <>
      {/* <h1>Blood Bank App</h1> */}
      <ToastContainer/>
      <Routes>
        <Route path="/organisation" element={
         <ProtectedRoute>
             <Organisation/>
         </ProtectedRoute>
        } />
         <Route path="/hospital" element={
         <ProtectedRoute>
             <Hospitals/>
         </ProtectedRoute>
        } />
         <Route path="/donar-list" element={
         <ProtectedRoute>
             <DonarList/>
         </ProtectedRoute>
        } />
         <Route path="/hospital-list" element={
         <ProtectedRoute>
             <HospitalList/>
         </ProtectedRoute>
        } />
         <Route path="/org-list" element={
         <ProtectedRoute>
             <OrgList/>
         </ProtectedRoute>
        } />
         <Route path="/admin" element={
         <ProtectedRoute>
             <AdminHome/>
         </ProtectedRoute>
        } />
         <Route path="/analytics" element={
         <ProtectedRoute>
             <Analytics/>
         </ProtectedRoute>
        } />
         <Route path="/consumer" element={
         <ProtectedRoute>
             <Consumer/>
         </ProtectedRoute>
        } />
         <Route path="/donar" element={
         <ProtectedRoute>
             <Donar/>
         </ProtectedRoute>
        } />
        <Route path="/" element={
         <ProtectedRoute>
             <Homepage/>
         </ProtectedRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
             <Login/>
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        } />
      </Routes>
     </>
  );
}

export default App;
