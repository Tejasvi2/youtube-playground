import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import MainContainer from './MainContainer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from './Watch';


const Body = () => {
 const [toggleSideBar, setToggleSideBar] = useState(false);

 const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />
  },
  {
    path: '/watch',
    element: <Watch />
  }
 ])

  return (
    <div>
       <Header handleToggleSideBar={()=>setToggleSideBar(!toggleSideBar)} />
       <Sidebar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
       <RouterProvider router={appRouter} />

    </div>
  )
}

export default Body
