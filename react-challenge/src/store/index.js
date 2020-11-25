import { createStore } from 'redux'

const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
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

const store = createStore(reducer)

export default store
