import React from 'react';
import menu_icon from '../assets/menu-black.png';


const Sidebar = ({toggleSideBar, setToggleSideBar}) => {

    const handleSideBar = () => { setToggleSideBar(!toggleSideBar); }
    return (
        <div>
            {
             toggleSideBar &&  (
                <div className='w-32 border border-b-slate-500 shadow-md h-lvh z-50 bg-white fixed inset-0'>
            <button onClick={handleSideBar}>
            <img src={menu_icon} alt="menu-icon" className='w-6 p-1'/>
              </button>
             <div className='pt-[10%] pl-5'> 
             <ul className='gap-6'>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
             </ul>
                Sidebar </div>
                </div>
                )
            }
        </div>
    )

}

export default Sidebar
