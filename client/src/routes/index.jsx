import React from 'react'
import { Route, Routes } from 'react-router';

const Router = () => {
  return (
    <div>
        <Routes>
      
      {/* <Route path='/' element={<Section1 />}/> */}
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Page />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
{/* <ToastContainer /> */}

     </Routes>
    </div>
  )
}

export default Router;
