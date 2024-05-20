import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Signuppage from '../pages/Signup/sign-up';
import LoginPage from '../pages/Login/login';
// import Dashboard from '../dashboard';
import HomePage from '../pages/Home/home';
import Signuppage from '../pages/Signup/sign-up';
import Profile from '../pages/Profile/profile';
import Network from '../pages/Network/network';
import ManageNetwork from '../pages/Network/manageNetwork';
import ActiveConnections from '../pages/Network/myConnections';
import Message from '../pages/Message';
// import Example from '../page';
import io from "socket.io-client";
import Notifications from '../pages/Notification/notifications';

const socket =io.connect("http://localhost:8080/")
const socketNotify =io.connect("http://localhost:4000/")
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
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/message' element={<Message socket={socket}/>} />
          <Route path='/mynetwork' element={<Network />} />
          <Route path='/notifications' element={<Notifications socket={socketNotify}/>} />
          <Route path='/mynetwork/invitation-manager' element={<ManageNetwork />} />
          <Route path='/mynetwork/invite-connect/connections' element={<ActiveConnections />} />
          {/* <ToastContainer /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
