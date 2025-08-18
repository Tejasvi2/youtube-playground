import { useState, useEffect } from "react";
import { API_SEARCH } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../store/searchSlice";
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';

const Header = ({ handleToggleSideBar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleSuggestion, setToggelSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search.cacheResults);

  const dispatch = useDispatch();

  // searchCache = {
  //     "iphone": ["iphone 11", "iphone 14"]
  // }

  // searchQuery = "iphone"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetsions();
      }
    }, 200);
    return () => clearTimeout(timer);
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
    const data = await fetch(API_SEARCH + searchQuery);
    const res = await data.json();
    setSuggestions(res[1]);
    dispatch(cacheResults({ [searchQuery]: res[1] }));
  };

  const handleClicked = (item) => {
    setSearchQuery(item);
  };

  return (
    <div className="w-full p-2 flex justify-between z-10 sticky">

      <div className="flex justify-around items-center gap-3">
      <button onClick={handleToggleSideBar}>
        <img src={assets.menu_logo} alt="menu-icon" className="w-6 p-1" />
      </button>  
      <div  className="w-20">
        <Link to="/">
        <img src={assets.youtube_logo} alt="youtube_logo" className="" />
        </Link>
      </div>
      </div>

      <div className="border flex rounded-full w-[48%]">
        <div className="static w-[90%]">
          <input
            type="text"
            className="w-full border-0 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setToggelSuggestion(true)}
            onBlur={() =>
              setTimeout(() => {
                setToggelSuggestion(false);
              }, 500)
            }
          />
          {toggleSuggestion && (
            <div className="bg-slate-100 text-black absolute top-13 p-2 mt-0.5 h-64 min-w-full overflow-y-auto  rounded-md">
              <ul className="list-none z-50">
                {suggestions.map((data) => (
                  <li
                    key={data}
                    className="p-2 m-2 cursor-pointer hover:bg-gray-200"
                  >
                    <Link
                      to={"/results?search_query=" + data}
                      onClick={() => handleClicked(data)}
                      className="block w-full h-full"
                    >
                      {data}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="p-2 pl-3 w-[10%] border-l border-gray-400">
          <img src={assets.seach_logo} alt="search-logo" className="w-6"/>
        </button>
      </div>
      <div><img src={assets.user_logo} alt="search-logo" className="w-10 items-center"/></div>
    </div>
  );
};

export default Header;
