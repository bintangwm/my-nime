import React from 'react'
import useFetch from '../helpers/useFetch'
import { useParams } from 'react-router-dom'

function AnimeDetails(props) {
  const { id } = useParams()

  const [anime, loading] = useFetch(
    `https://api.jikan.moe/v3/anime/${id}`
  )
  
  if (loading) {
    return (
      <div className="animeDetail container mb-3">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Loading your data...
        </div>
      </div>
    )
  } else if (!anime || anime.length === 0) {
    return (
      <div className="animeDetail container mb-3">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  }

  return(
    <div className="animeDetail container mb-3">
      <h2>Anime Detail</h2>
      <hr/>
      <div className="row">
        <div className="col-5">
          <img src={ anime.image_url } alt="anime"/>
        </div>
        <div className="col-7">
          <div className="card">
            <div className="cardBody p-4">
              <h4>{ anime.title }</h4>
              <p>synopsis: { anime.synopsis }</p>
              <p>episodes: { anime.episodes }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeDetails