import './App.css';
import Login from './pages/Login/login';
import Page from './page';
import Signup from './pages/Signup/sign-up';
import { Routes,Route } from "react-router-dom";
import Dashboard from './dashboard';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';
function App() {
  return (
    <div className="App">
     <Routes>
      
      {/* <Route path='/' element={<Section1 />}/> */}
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Page />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
{/* <ToastContainer /> */}

     </Routes>
   
    </div>
  );
}

export default App;
