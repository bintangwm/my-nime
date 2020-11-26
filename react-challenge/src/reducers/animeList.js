const initialState = {
  list: [],
  loading: true,
  error: null
}

export default function animeListReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      return {...state, list: action.payload }
    case 'SET_ANIME_LOADING':
      return {...state, loading: action.payload }
    case 'SET_ANIME_ERROR':
      return {...state, error: action.payload }
    default:
      return state
  }
}