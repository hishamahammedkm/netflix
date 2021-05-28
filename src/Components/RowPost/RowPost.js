import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../constants/axios'
import {imageUrl,API_Key} from '../constants/constants'
function RowPost({title,isSmall,url}) {
    const opts = {

        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }}
    const [urlid, setUrlid] = useState('')
    const handleMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
            console.log(response.data)
            if(response.data.results.length !==0){
                setUrlid(response.data.results[0])

            }else{
                alert('video not available')
            }
        })

    }
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(url).then(response=>{
            setMovies(response.data.results)
        }).catch(error=>{
            console.log(error)
            
        })
      
    }, [])
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map(obj=>
                        <img onClick={()=>{
                            handleMovie(obj.id)
                        }} className={isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='posters'/>
                        
                        )
                }
            </div>
              { urlid && <Youtube videoId={urlid.key} opts={opts}  /> }
        </div>
    )
}

export default RowPost
