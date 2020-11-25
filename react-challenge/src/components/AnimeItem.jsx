import React from 'react'
import { useHistory } from 'react-router-dom'

function AnimeItem(props) {
  const { anime } = props
  const history = useHistory()

  function goToShowAnimeDetails(e, id) {
    e.preventDefault()
    history.push(`/anime/${id}`)
  }

  return (
    <div key={anime.mal_id} className="col-3">
      <div className="card mb-3">
        <img onClick={ (e) => goToShowAnimeDetails(e, anime.mal_id) }  src={ anime.image_url } className="card-img-top" alt={anime.title}/>
        <div className='card-body'>
          <div style={{textAlign: 'center'}}>{ anime.title }</div>
        </div>
      </div>
    </div> 
  )
}

export default AnimeItem