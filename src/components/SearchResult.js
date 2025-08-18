import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { API_SEARCH_RESULT } from '../utils/Constant';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addSearchResults } from '../store/searchSlice';
import { Link } from 'react-router-dom';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [searchQueryData, setSearchQueryData] = useState([]);
    const search_query = searchParams.get("search_query");

    const dispatch = useDispatch();

    const searchResultData = useSelector(store => store.search.addSearchResults);
    console.log({searchResultData});

    useEffect(()=>{
     fetchSearchData();
    }, [search_query])

    const fetchSearchData = async () => {
     const response = await fetch(API_SEARCH_RESULT + search_query);
     const data = await response.json();
     dispatch(addSearchResults(data.items));
     setSearchQueryData(data?.items);
    }

  return (
    <div className='block items-center md:ml-10 md:p-5'>
      { searchQueryData.length > 0 &&
        searchQueryData.map((item) => {
           return (
            <Link to={'/watch?v='+ item?.id?.videoId } key={item.id.videoId}>
            <div className='flex gap-5 m-5 cursor-pointer'> 
                <img src={item?.snippet?.thumbnails?.medium?.url} alt="img" className='w-[40%] rounded-md shadow-sm hover:opacity-50' />
                <p className='bold'>{item?.snippet?.title}</p>
            </div>
            </Link>
            )
        })
      }
    </div>
  )
}

export default SearchResult;
