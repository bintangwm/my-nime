import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  favorites: [],
  animeList: [],
  animeListLoading: false,
  animeListError: null
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
    case 'SET_ANIME_LIST':
      return {...state, animeList: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
