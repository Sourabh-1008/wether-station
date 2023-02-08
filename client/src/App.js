import "./App.css";
// import Layout from "./Layout";
// import Unauthorized from "./auth/Unauthorized";

import Home from "./components/Pages/Home";
import SignIn from "./auth/SignIn ";
import SignUp from "./auth/SignUp";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserNavbar from "./components/Pages/UserNavbar";
import { APP_ROUTES } from "./utils/constants";
// import LinkPage from "./components/Pages/LinkPage";
import UserDashboard from "./components/User/UserDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import PrivateRoute from "./auth/PrivateRoute";
import AuthContextProvider from "././contexts/AuthContect";
// import PublicRoute from "./auth/PublicRoute";
// import AdminRoute from "./auth/AdminRoute";

function App() {
  return (
    // <>
    //   <UserNavbar />
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/linkpage" element={<LinkPage />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/unauthorized" element={<Unauthorized />} />
    //       <Route path="/" element={<Home />} />
    //       <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
    //         <Route
    //           path={APP_ROUTES.ADMINDASHBOARD}
    //           element={<AdminDashboard />}
    //         />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </>
    <AuthContextProvider>
      <BrowserRouter>
        <UserNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route
              path={APP_ROUTES.ADMINDASHBOARD}
              element={<AdminDashboard />}
            />
            <Route
              path={APP_ROUTES.USERDASHBOARD}
              element={<UserDashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
