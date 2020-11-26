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

export function fetchAnimeList() {
  return (dispatch) => {
    fetch('https://api.jikan.moe/v3/season/2020/summer')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject({ error: res })}
      })
      .then(data => {
        let newData = []
        for (let i = 0; i < 12; i++) {
          newData.push(data.anime[i])
        }
        dispatch({
          type: 'SET_ANIME_LIST',
          payload: newData
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}