import React, { useEffect, useState } from 'react'
import './Banner.css'
import {apikey,imageURL} from '../../constants/constants'
import axios from '../../constants/axios'

function Banner() {
  const index=Math.floor((Math.random() * 19) + 1);//to store random indices of movie array
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
      setMovie(response.data.results);
    });
  },[]);
  return (
    <div style={{backgroundImage:`url(${movie[index]?imageURL+movie[index].backdrop_path:""})`}} className='banner'>
      <div className='content'>
        {console.log(movie)}
        <h1 className='title'>{(movie[index])?movie[index].original_title:"Title Unavailable"}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{(movie[index])?movie[index].overview.substring(0,290)+"...":""}</h1>
      </div>
    </div>
  );
}

export default Banner

