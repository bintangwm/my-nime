import React from 'react'
import './index.css'
import axios from 'axios'
import AnimeList from './components/AnimeList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pageName: 'Anime List - Page',
      animeList: [],
      searchAnime: '',
      anime: {}
    }
  }

  changeSearchAnime (event) {
    this.setState({
      searchAnime: event.target.value
    })
  }

  proceedSearchAnime (event) {
    event.preventDefault()
    const { searchAnime } = this.state
    console.log(searchAnime)
  }

  showAnimeDetails (anime) {
    console.log(anime);
  }

  deleteAnime (index) {
    console.log(index);
    // const { animeList } = this.state
    // const newAnimeList = animeList.map(anime => {
    //   return anime
    // })

    console.log(this)
    // newAnimeList.splice(index, 1)
    // this.setState({
    //   animeList: newAnimeList
    // })
  }

  componentDidMount() {
    // fetch('https://api.jikan.moe/v3/season/2020/winter',{
    //   method: 'get'
    // })
    //   .then(response => {
    //     console.log(response, 'success')
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    axios({
      baseURL: 'https://api.jikan.moe/v3/season/2018/winter',
      method: 'GET'
    })
      .then(({data}) => {
        const animes = []
        for (let i = 0; i < 10; i++) {
          animes.push(data.anime[i])
        }
        this.setState({
          animeList: animes
        })
        console.log(this.state.animeList, 'success')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { pageName, animeList, searchAnime } = this.state
    return (
      <React.Fragment>
        <div className="container">
          <h1>{ pageName }</h1>
          <form onSubmit={ (event) => this.proceedSearchAnime(event) } className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              value={ searchAnime }
              // onChange={this.changePageName.bind(this)}
              onChange={(event) => this.changeSearchAnime(event)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <p>{ searchAnime }</p>

          <AnimeList 
            animeList={ animeList } 
            showAnimeDetails={ this.showAnimeDetails }  
            deleteAnime={ this.deleteAnime }
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App
