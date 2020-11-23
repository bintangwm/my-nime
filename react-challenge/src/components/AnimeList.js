import React from 'react'

class AnimeList extends React.Component {  
  render() {
    const { animeList, showAnimeDetails, deleteAnime } = this.props
    return (
      <div className='row'>
        {
          animeList.map((anime, i) => (
            <div key={ anime.mal_id } className='col-4'>
              <div className='card mb-3'>
                <img src={ anime.image_url } className="card-img-top" alt="..."/>
                <div className='card-body'>
                  <div>{ anime.title }</div>
                  <button onClick={ () => showAnimeDetails(anime) } className='btn btn-info'>Details</button>
                  <button onClick={ () => deleteAnime(i) } className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </div>
            ))
          }
      </div>
    )
  }
}

export default AnimeList