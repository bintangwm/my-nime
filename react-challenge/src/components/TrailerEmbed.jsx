import React, { useContext } from 'react'
import { TrailerContext } from '../context/index'

export default function EmbedTrailer() {
  const trailerContext = useContext(TrailerContext)

  return(
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title="animeTrailer" className="embed-responsive-item" src={ trailerContext.src }></iframe>
    </div>
  )
}