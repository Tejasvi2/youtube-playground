import React from "react";
import { API_URL, API_USER_PLAYLIST, API_VIDEOS_LIST } from "../utils/Constant";
import { useEffect, useState, useRef, useCallback } from "react";
import VideoGrops from "./VideoGrops";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos, storePageToken } from "../store/videoSlice";

const MainContainer = () => {
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  const nextPageToken = useSelector(
    (store) => store.video.pageToken.nextPageToken
  );
  const videos = useSelector((store) => store.video.videos || []);

  const fetchYoutubeData = useCallback(async () => {
    if (loading || !hasMore) return; // prevent duplicate calls
    setLoading(true);
    const url = `${API_URL}${nextPageToken ? nextPageToken : ""}`;
    const data = await fetch(url);
    const res = await data.json();

    if (!res?.nextPageToken) setHasMore(false);
    if (res?.items?.length) dispatch(loadVideos(res.items));
    dispatch(
      storePageToken({
        nextPageToken: res?.nextPageToken || null,
        prevPageToken: res?.prevPageToken || null,
      })
    );
    setLoading(false);
  }, [dispatch, nextPageToken]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          console.log("Bottom reached → Load more data");
          fetchYoutubeData();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [fetchYoutubeData]);

  return (
    <div className="w-full md:pl-10  justify-between -z-10">
      {videos.length > 0 ? <VideoGrops videos={videos} /> : <h1>No reesult</h1>}
      <div ref={loaderRef} className="bg-slate-500 h-20" />
    </div>
  );
};

export default MainContainer;
