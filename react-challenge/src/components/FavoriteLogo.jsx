import React from 'react'
import { addFavorite, removeFavorite } from '../actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux' //untuk abil data

function FavoriteLogo(props) {
  const { anime } = props
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)
  const found = favorites.find(el => el.mal_id === anime.mal_id)

  function addToFavorites(e) {
    dispatch(addFavorite(anime))
  }

  function removeFromFavorites(e) {
    dispatch(removeFavorite(anime))
  }

  if (found) {
    return (
      <i onClick={ (e) => removeFromFavorites(e) } className="fas fa-heart" style={{fontSize:'2em', color: 'red', cursor: 'pointer'}}></i>
    )
  } else {
    return (
      <i onClick={ (e) => addToFavorites(e) } className="fas fa-heart" style={{fontSize:'2em', cursor: 'pointer'}}></i>
    )
  }
}

export default FavoriteLogo