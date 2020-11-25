export function addFavorite(anime) {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      anime
    }
  }
}

export function removeFavorite(anime) {
  return {
    type: 'REMOVE_FAVORITE',
    payload: {
      anime
    }
  }
}