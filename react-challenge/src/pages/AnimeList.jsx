import React from 'react'

function AnimeList(props) {
  const { animeList, showAnimeDetails, deleteAnime } = props
  return (
    <div className="animeList">
      <h2>Anime List</h2>
      <hr/>
      <div className="row">
        {
          animeList.map((anime, i) => (
            <div key={anime.mal_id} className="col-3">
              <div className="card mb-3">
                <img src={ anime.image_url } className="card-img-top" alt="..."/>
                <div className='card-body'>
                  <div>{ anime.title }</div>
                  <button onClick={ () => showAnimeDetails(anime.mal_id) } className='btn btn-info'>Details</button>
                  <button onClick={ () => deleteAnime(i) } className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </div>  
          ))
        }
      </div>
    </div>
  )
}

export default AnimeList