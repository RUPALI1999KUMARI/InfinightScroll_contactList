import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./ProfileCardRenderer";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    console.log(page,"page")
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`);
    const data = await res.json();
    // console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    // setTimeout(()=>{
      getCardData()
    // },1000)
   ;
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
