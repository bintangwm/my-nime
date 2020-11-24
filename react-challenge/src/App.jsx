import React from 'react'
import './index.css'
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

  async showAnimeDetails (id) {
    console.log(id);
    try {
      const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
      const anime = await response.json()
      console.log(anime.title)
      console.log(this)
      // this.setState({
      //   anime: anime
      // })
    } catch (err) {
      console.log(err)
    }
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

  async componentDidMount() {
    try {
      const response = await fetch('https://api.jikan.moe/v3/season/2020/summer')
      const animes = await response.json()
      const animeList = []
      for (let i = 0; i < 10; i++) {
        animeList.push(animes.anime[i])
      }
      this.setState({
        animeList: animeList
      })
    } catch (err) {
      console.log(err)
    }
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
          {/* <p>{ JSON.stringify(animeList) }</p> */}

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
