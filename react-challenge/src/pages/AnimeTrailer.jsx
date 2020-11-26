import React from 'react'
import { TrailerEmbed } from '../components/index'

function AnimeTrailer(props) {
  const { anime } = props

  return(
    <div className="row my-5">
      <div className="col">
        <h3>Trailer: { anime.title }</h3>
        <hr/>
        {/* Trailer */}
        <TrailerEmbed/>
      </div>
    </div>
  )
}

export default AnimeTrailer