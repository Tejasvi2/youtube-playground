import React, { Component } from 'react';
import menu_icon from '../assets/menu-black.png';
import { useState, useEffect } from 'react';
import { API_SEARCH } from '../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../store/searchSlice';


const Header = ({handleToggleSideBar}) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [toggleSuggestion, setToggelSuggestion] = useState(false);
    const [suggestions, setSuggestions]= useState([]);

    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();

    // searchCache = {
    //     "iphone": ["iphone 11", "iphone 14"]
    // }

    // searchQuery = "iphone"

    useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery])
        } else {
        getSearchSuggetsions();
        }
    },200);
    return () => {
        clearTimeout(timer)
    }

    }, [searchQuery]);



    // Debouncing 
    // key - i
    // - render the Component
    // - useEffect();
    // - start the timer => make api call after 200 ms 


    // key - ip 
    // - destroy the Component(useEffect return method)
    // - re-render the Component
    // - useEffect()
    // - start timer => make api call after 200 ms 

    // once 200 ms pass and no other key pressed then it will make API call


    const getSearchSuggetsions = async () => {
        console.log('API CALL',  searchQuery)
        const data = await fetch(API_SEARCH +searchQuery);
        const res = await data.json();
        console.log(res)
        setSuggestions(res[1]);
        dispatch(cacheResults({[searchQuery] : res[1]}))
    }


  return (
    <div className='w-full border border-r-neutral-500 p-2 shadow-xl flex justify-between z-10 sticky'>
        <button onClick={handleToggleSideBar}>
            <img src={menu_icon} alt="menu-icon" className='w-6 p-1'/>
        </button>

        <div className='border border-b-slate-400 flex rounded-md'>
        <div className='static top-10'>
        <input type="text" className='border-r-2 p-2 mr-1 w-52' value={searchQuery} 
         onChange={(e) => setSearchQuery(e.target.value)} 
         onFocus={()=> setToggelSuggestion(true)}
         onBlur={()=> setToggelSuggestion(false)}
         />
         {
            toggleSuggestion   ?  <div className='bg-slate-100 text-black absolute top-13 p-2 mt-0.5 h-64 w-52 rounded-md'>
            <u className='list-none '>
                {
                    suggestions.map((data) => {
                        return (<li className='p-2' key={data}>{data}</li>)
                    })
                }
            </u>
        </div> : ''
         }
       
        </div>
        <button className='p-2 pl-3' >Search</button>
        </div>

        <div>
            Account
        </div>
    </div>
  )
}

export default Header;
