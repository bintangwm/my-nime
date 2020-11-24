import React, { useState } from 'react'
import AnimeList from './pages/AnimeList'
import AnimeSearch from './pages/AnimeSearch'
import AnimeDetails from './pages/AnimeDetails'
import Navbar from './components/Navbar'

function App() {
  const [pageName, setPageName] = useState('AnimeList')
  const [searchQuery, setSearchQuery] = useState('') 
  const [animeId, setAnimeId] = useState(undefined) 
  
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  } 

  function changePage(e, page) {
    e.preventDefault()
    setPageName(page)
  }

  function goToShowAnimeDetails(e, id) {
    setPageName('AnimeDetails')
    setAnimeId(id)
  }

  function goToSearchAnime(e) {
    console.log(searchQuery, '<<< function goTo');
    e.preventDefault()
    setPageName('AnimeSearch')
  }

  if (pageName === 'AnimeDetails') {
    return (
      <section>
        <Navbar
          handleSearchQuery={ handleSearchQuery }
          searchQuery={ searchQuery }
          changePage={ changePage }
          goToSearchAnime={ goToSearchAnime }
        />
        <AnimeDetails
          animeId={ animeId }
        />
      </section>
    )
  } else
  if (pageName === 'AnimeList') {
    return(
      <section>
        <Navbar
          handleSearchQuery={ handleSearchQuery }
          searchQuery={ searchQuery }
          changePage={ changePage }
          goToSearchAnime={ goToSearchAnime }
        />
        <AnimeList
          goToShowAnimeDetails={ goToShowAnimeDetails }
        />
      </section>
    )
  } else
  if (pageName === 'AnimeSearch') {
    return(
      <section>
        <Navbar
          handleSearchQuery={ handleSearchQuery }
          searchQuery={ searchQuery }
          changePage={ changePage }
          goToSearchAnime={ goToSearchAnime }
        />
        <AnimeSearch
          goToShowAnimeDetails={ goToShowAnimeDetails }
        />
      </section>
    )
  } else {
    return(
      <div>
        <h1>Page Not Found</h1>
      </div>
    )
  }
}

export default App