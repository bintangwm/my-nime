import React from 'react'
import { AnimeItem } from '../components/index'
import useFetch from '../helpers/useFetch'
import { useParams, useHistory } from 'react-router-dom'

function AnimeSearch() {
  const { query:searchQuery } = useParams()
  const history = useHistory()

  const [animeList, loading] = useFetch(
    `https://api.jikan.moe/v3/search/anime?q=${searchQuery}&page=1`,
    'animeSearch'
  )

  function goToShowAnimeDetails(e, id) {
    e.preventDefault()
    history.push(`/anime/${id}`)
  }

  if (loading) {
    return (
      <div className="animeDetail container mb-3">
        <h2>Search Result</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Loading your data...
        </div>
      </div>
    )
  } else if (animeList.length > 0) {
    return (
      <div className="container-fluid mb-3">
        <h2>Search Result</h2>
        <hr/>
        <div className="row">
          {
            animeList.map((anime, i) => (
              <AnimeItem
                key={anime.mal_id}
                i={i}
                anime={anime}
                goToShowAnimeDetails={goToShowAnimeDetails}
              /> 
            ))
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="animeDetail container mb-3">
        <h2>Search Result</h2>
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  }
}

export default AnimeSearch