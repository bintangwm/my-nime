export const isAlreadyInFavorite = (list, newData) => {
  const found = list.find(el => el.mal_id === newData.mal_id)
  if (found) {
    return list.filter(el => el !== newData)
  } else {
    return list.concat(newData)
  }
}