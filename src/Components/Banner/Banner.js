import React,{useEffect, useState} from 'react'
import axios from '../constants/axios'
import {API_Key,imageUrl} from '../constants/constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then(response=>{
            setMovie(response.data.results[0])
        }).catch(error=>console.log(error))
        
    },[])
    return (
        
        <div style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className="content">
                <h1 className='title'>{movie ? movie.original_title : ""}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>my list</button>

                </div>
                <h1 className='discription'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>    
        </div>
    )
}

export default Banner
