import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Signuppage from '../pages/Signup/sign-up';
import LoginPage from '../pages/Login/login';
import Dashboard from '../dashboard';
import HomePage from '../pages/Home/home';
import Signuppage from '../pages/Signup/sign-up';
import Profile from '../pages/Profile/profile';
import Network from '../pages/Network/network';
import ManageNetwork from '../pages/Network/manageNetwork';
import ActiveConnections from '../pages/Network/myConnections';
// import Example from '../page';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* <Route path='/' element={<Section1 />}/> */}
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/' element={<Example />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mynetwork' element={<Network />} />
          <Route path='/mynetwork/invitation-manager' element={<ManageNetwork />} />
          <Route path='/mynetwork/invite-connect/connections' element={<ActiveConnections />} />
          {/* <ToastContainer /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
