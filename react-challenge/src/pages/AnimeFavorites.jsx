import React from 'react'
import { useSelector } from 'react-redux' //untuk abil data
import { AnimeItem } from '../components/index'

function AnimeFavorites() {
  const favorites = useSelector((state) => state.favorites)

  if (favorites.length === 0) {
    return (
      <div className="container">
        <h2>My Favorites</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Your favorites is still empty
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>My Favorites</h2>
      <hr/>
      <div className="row">
        {
          favorites.map((anime, i) => (
            <AnimeItem
              key={anime.mal_id}
              i={i}
              anime={anime}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default AnimeFavorites