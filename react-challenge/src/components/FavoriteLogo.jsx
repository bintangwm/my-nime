import React from 'react'
import { addFavorite, removeFavorite } from '../actions'
import { useSelector, useDispatch } from 'react-redux' //untuk abil data

function FavoriteLogo(props) {
  const { anime } = props
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.favorites)
  const found = favorites.find(el => el.mal_id === anime.mal_id)
  function addToFavorites(e) {
    dispatch(addFavorite(anime))
  }

  function removeFromFavorites(e) {
    dispatch(removeFavorite(anime))
  }

  if (found) {
    return (
      <i onClick={ (e) => removeFromFavorites(e) } className="fas fa-heart anime-item-favorite" style={{ color: 'red' }}></i>
    )
  } else {
    return (
      <i onClick={ (e) => addToFavorites(e) } className="fas fa-heart anime-item-favorite"></i>
    )
  }
}

export default FavoriteLogo