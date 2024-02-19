import './App.css';
import Login from './pages/Login/login.jsx';
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
     {/* import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { fetchPost } from './slices/postSlice';
// import { fetchComments } from './slices/commentSlice';
import Post from './post';
function App() {
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchPost());
  },[dispatch])

  // const  handleComments=(id)=>{
  //   dispatch(fetchComments(id));
  // }

  const contents = useSelector((state)=>state.post.contents);
  const isLoading = useSelector((state)=>state.post.isLoading);
  const error = useSelector((state)=>state.post.error);
  // const Loading = useSelector((state)=>state.comments.isLoading);
  // const iserror = useSelector((state)=>state.comments.error);
  // const comments = useSelector((state)=>state.comments.comments);


  if(isLoading){
    return 'Loading...';
  }
  if(error){
    return error;
  }

  return(
    <div className='post-container'>
      {contents?.map((post)=>(
       <Post 
       post= {post}/>
      ))}
      
    </div>
  )
}


export default App; */}
    </div>
  );
}

export default App;
