import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('') 
  const history = useHistory()
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  } 

  function goToAnimeList(e) {
    e.preventDefault()
    history.push(`/`)
  }

  function goToSearchAnime(e) {
    e.preventDefault()
    history.push(`/anime-search/${searchQuery}`)
  }

  function goToAnimeFavorites(e) {
    e.preventDefault()
    history.push('/favorites')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" >@nime</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a onClick={ (e) => goToAnimeList(e) } href="/#" className="nav-link" >Anime List</a>
          </li>
          <li className="nav-item">
            <a onClick={ (e) => goToAnimeFavorites(e) } href="/#" className="nav-link" >Favorites</a>
          </li>
        </ul>
        <form onSubmit={ (e) => goToSearchAnime(e) } className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            value={ searchQuery }
            onChange={(e) => handleSearchQuery(e)}
            />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar