import { combineReducers } from 'redux'
import animeList from './animeList'
import favorites from './favorites'

export default combineReducers({
  animeList,
  favorites
})