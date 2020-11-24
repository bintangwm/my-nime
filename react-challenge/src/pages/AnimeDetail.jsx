import React from 'react'

function AnimeDetail(props) {
  const { anime } = props
  
  if (!anime.title) return <div></div>

  return(
    <div className="animeDetail container">
      <h2>Anime Detail</h2>
      <hr/>
      <div className="row">
        <div className="col-5">
          <img src={ anime.image_url } alt="anime"/>
        </div>
        <div className="col-7">
          <div className="card">
            <div className="cardBody">
              <h3>{ anime.title }</h3>
              <p>synopsis: { anime.synopsis }</p>
              <p>episodes: { anime.episodes }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeDetail