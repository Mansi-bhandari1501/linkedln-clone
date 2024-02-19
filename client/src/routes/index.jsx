import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Signuppage from '../pages/Signup/sign-up';
import LoginPage from '../pages/Login/login';
import Dashboard from '../dashboard';
import HomePage from '../pages/Home/home';
import Signuppage from '../pages/Signup/sign-up';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* <Route path='/' element={<Section1 />}/> */}
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <ToastContainer /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
