import React from 'react'
import Post from '../Post';
import Header from '../Header';

const HomeComponent = () => {
  return (
    <div style={{backgroundColor:"#F4F2EE" ,height:"100vh"}}>
      <Header />
      <Post/>
    </div>
  )
}

export default HomeComponent;
