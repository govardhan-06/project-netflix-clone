import React, { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import YouTube from 'react-youtube'
import {apikey,imageURL} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  //urls can also be given in separate file and then exporting it and importing it in App.js will also do the job
  const movietypes=[`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`,`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=28`]
  const [movie,setMovie]=useState([]);
  const [trailer,setTrailer]=useState([]);
  useEffect(()=>{
    axios.get(`${props.types==="action"?movietypes[1]:movietypes[0]}`).then((response)=>{ 
    setMovie(response.data.results);
    }).catch(err=>{
      alert("Network Error!!");
    });
  },[]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }};
  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className='posters'>
          {movie.map((obj,index)=>{
            return(
              <img key={index} className={`${props.isSmall?"small-posters":"poster"}`} src={`${imageURL+obj.backdrop_path}`} alt="Poster" 
              onClick={()=>{
                axios.get(`/movie/${obj.id}/videos?api_key=${apikey}`).then((response)=>{
                  if(response.data.results.length!==0){
                    setTrailer(response.data.results[0]);
                  }
                });
                }}/>
            );
          })}
    </div>
    {console.log(trailer)}
    {trailer.length!==0?<YouTube videoId={trailer.key} opts={opts}/>:null}
    </div>
  )
}

export default RowPost
