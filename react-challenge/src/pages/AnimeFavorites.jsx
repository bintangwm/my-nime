import React from 'react'
import { useSelector } from 'react-redux' //untuk abil data
import { AnimeItem } from '../components/index'

function AnimeFavorites() {
  const favorites = useSelector((state) => state.favorites.favorites)

  if (!favorites) {
    return (
      <div className="container">
        <h2>My Favorites</h2>
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  }

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
          favorites.map((anime) => (
            <AnimeItem
              key={anime.mal_id}
              anime={anime}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default AnimeFavorites