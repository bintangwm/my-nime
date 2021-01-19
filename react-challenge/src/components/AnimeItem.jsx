import React from 'react'
import { useHistory } from 'react-router-dom'
import { FavoriteLogo } from './index'

function AnimeItem(props) {
  const { anime } = props
  const history = useHistory()

  function goToShowAnimeDetails(e, id) {
    e.preventDefault()
    history.push(`/anime/${id}`)
  }

  return (
    <div key={anime.mal_id} className="col-md-3">
      <div className="card shadow anime-item-card">
        <div className="inner">
          <img onClick={ (e) => goToShowAnimeDetails(e, anime.mal_id) }  src={ anime.image_url } className="card-img-top" alt={anime.title}/>  
        </div>
        <FavoriteLogo
            anime={ anime }
          />
        <div className='card-body'>
          <div className="anime-item-title" style={{ textAlign: 'center' }}>{ anime.title }</div>
        </div>
      </div>
    </div> 
  )
}

export default AnimeItem