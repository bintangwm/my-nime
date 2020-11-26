import React from 'react'
import useFetch from '../helpers/useFetch'
import { useParams, useHistory, Route, useRouteMatch } from 'react-router-dom'
import { FavoriteLogo } from '../components/index'
import { AnimeTrailer } from './index'

function AnimeDetails() {
  const { id } = useParams()
  const history = useHistory()
  const { path, url } = useRouteMatch()

  const [anime, loading] = useFetch(
    `https://api.jikan.moe/v3/anime/${id}`
  )

  if (loading) {
    return (
      <div className="anime-detail container">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Loading your data...
        </div>
      </div>
    )
  } else if (!anime || anime.length === 0) {
    return (
      <div className="anime-detail container">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  }

  return(
    <div className="anime-detail container">
      <h2>Anime Detail</h2>
      <hr/>
      <div className="row">
        <div className="col-5">
          <div className="anime-detail-image">
            <img className="img-fluid" src={ anime.image_url } alt="anime"/>
            <FavoriteLogo
              anime={ anime }
            />
          </div>
        </div>
        <div className="col-7">
          <div className="card anime-detail-detail">
            <div className="cardBody p-4">
              <h4>{ anime.title }</h4>
              <hr/>
              <table className="table">
                <tbody>
                  <tr>
                    <td>score</td>
                    <td>{ anime.score }</td>
                  </tr>
                  <tr>
                    <td>rating</td>
                    <td>{ anime.rating }</td>
                  </tr>
                  <tr>
                    <td>premiered</td>
                    <td>{ anime.premiered }</td>
                  </tr>
                  <tr>
                    <td>synopsis</td>
                    <td className="anime-item-synopsis">{ anime.synopsis }</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={ () => history.push(`${url}/trailer`)} className="btn btn-info mt-5">Show Trailer</button>
            </div>
          </div>
        </div>
      </div>
      <Route path={`${path}/trailer`} >
        <AnimeTrailer
          anime={ anime }
        />
      </Route>
    </div>
  )
}

export default AnimeDetails