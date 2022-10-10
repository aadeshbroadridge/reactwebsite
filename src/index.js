import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import AccountOwners from './components/AccountOwners/AccountOwners';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
   <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
        {/* </Route> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="accountowners" element={<AccountOwners />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  {/* <Login/> */}
  {/* <ForgotPassword/> */}
  {/* <Registration/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
