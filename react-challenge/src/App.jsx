import React, { useEffect, useState } from 'react'
import './App.css'
import AnimeList from './pages/AnimeList'
import AnimeDetail from './pages/AnimeDetail'
import Navbar from './components/Navbar'

function App() {
  const [animeList, setAnimeList] = useState([])
  const [anime, setAnime] = useState({})
  const [searchAnime, setSearchAnime] = useState('')

  useEffect(() => {
    console.log('fetch data')
    async function fetchAnimeList() {
      try {
        const response = await fetch('https://api.jikan.moe/v3/season/2020/summer')
        const animes = await response.json()
        const newAnimeList = []
        for (let i = 0; i < 12; i++) {
          newAnimeList.push(animes.anime[i])
        }
        setAnimeList(newAnimeList)
        // setAnimeList(animes.anime)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAnimeList()
  }, [])

  function changeSearchAnime(e) {
    setSearchAnime(e.target.value)
  }

  function proceedSearchAnime(e) {
    e.preventDefault()
    console.log(searchAnime)
  }

  function deleteAnime(index) {
    const newAnimeList = animeList.filter((anime, i) => i !== index )
    setAnimeList(newAnimeList)
  }

  async function showAnimeDetails(id) {
    try {
      const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
      const fetchedAnime = await response.json()
      setAnime(fetchedAnime)
      console.log(anime)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <Navbar
        searchAnime={ searchAnime }
        proceedSearchAnime= { proceedSearchAnime }
        changeSearchAnime= { changeSearchAnime }
      />
      <div className="container">
        <AnimeDetail
          anime={ anime }
        />
        <AnimeList
          animeList={animeList}
          deleteAnime={deleteAnime}
          showAnimeDetails={showAnimeDetails}
        />
      </div>
    </section>
  )
}

export default App
