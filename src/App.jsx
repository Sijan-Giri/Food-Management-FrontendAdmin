import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AdminLogin from "views/admin/login/AdminLogin";
import { Provider } from "react-redux";
import store from "store/store";
import ProtectedRoute from "ProtectedRoute";
import {io} from "socket.io-client";
export const socket = io("https://food-management-system-backend.onrender.com",{
  auth : {
    token : localStorage.getItem("token")
  }
})
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
     <Route path="/" element={<AdminLogin />}/>
      <Route path="admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
    </Routes>
    </Provider>
  );
};

export default App;
