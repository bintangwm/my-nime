import React, { useEffect } from 'react'
import { AnimeItem } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAnimeList } from '../actions/index'

function AnimeList() {
  const animeList = useSelector((state) => state.animeList.list)
  const loading = useSelector((state) => state.animeList.loading)
  const error = useSelector((state) => state.animeList.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAnimeList())
  }, [dispatch])

  if (loading) {
    return (
      <div className="container">
        <h2>Anime List</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Loading your data...
        </div>
      </div>
    )
  }
  if (!animeList || error) {
    return (
      <div className="container">
        <h2>Anime List</h2>
        {JSON.stringify(animeList)}
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  } 
  if (animeList.length === 0) {
    return (
      <div className="container">
        <h2>Anime List</h2>
        <hr/>
        <div className="alert alert-info" data-testid="anime-list-content" role="alert">
          Data not found!
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <h2>Anime List</h2>
      <hr/>
      {/* { JSON.stringify(animeList)} */}
      <div className="row justify-content-center">
        {
          animeList.map((anime) => (
            <AnimeItem
              key={anime.mal_id}
              anime={anime}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default AnimeList