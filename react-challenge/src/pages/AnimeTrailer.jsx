import React from 'react'

function AnimeTrailer(props) {
  const { anime } = props

  return(
    <div className="row my-5">
      <div className="col">
        <h3>Trailer: { anime.title }</h3>
        <hr/>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="animeTrailer" className="embed-responsive-item" src={ anime.trailer_url }></iframe>
        </div>
      </div>
    </div>
  )
}

export default AnimeTrailer