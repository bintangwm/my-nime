import React from 'react'

function AnimeItem(props) {
  const { anime, goToShowAnimeDetails } = props

  return (
    <div key={anime.mal_id} className="col-3">
      <div className="card mb-3">
        <img onClick={ (e) => goToShowAnimeDetails(e, anime.mal_id) }  src={ anime.image_url } className="card-img-top" alt={anime.title}/>
        <div className='card-body'>
          <div style={{textAlign: 'center'}}>{ anime.title }</div>
          {/* <button onClick={ () => goToShowAnimeDetails(anime.mal_id) } className='btn btn-info'>Details</button> */}
        </div>
      </div>
    </div> 
  )
}

export default AnimeItem