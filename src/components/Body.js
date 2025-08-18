import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';



const Body = () => {
 const [toggleSideBar, setToggleSideBar] = useState(false);


  return (
    <div>
       <Header handleToggleSideBar={()=>setToggleSideBar(!toggleSideBar)} />
       <Sidebar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
       <div style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </div>
    </div>
  )
}

export default Body
