export default function favoritesReducer(state = { favorites: [] }, action) {
  let newFavorites
  switch (action.type) {
    case 'ADD_FAVORITE':
      newFavorites = state.favorites.concat(action.payload.anime)
      return {...state, favorites: newFavorites }
    case 'REMOVE_FAVORITE':
      newFavorites = state.favorites.filter(el => el.mal_id !== action.payload.anime.mal_id)
      return {...state, favorites: newFavorites }
    default:
      return state
  }
}